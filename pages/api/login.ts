import crypto from 'crypto';
import { serialize } from 'cookie';
import {
  selectUserByUsername,
  insertSession,
  deleteSessionByTime,
} from '../../db';
import { hashPassword, verifyHashMatchesPassword } from '../../hashing';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  // To secure application even further,
  // accept a CSRF token here and verify it

  const username = req.body.username;
  const password = req.body.password;

  // 'import' from db where got username from users Table(00005), which contains also password_hash there, used argon2 to verify password_hash and password, which returns boolean
  const users = await selectUserByUsername(username, password);

  if (users.length === 0) {
    console.log('Login.ts--denied login - 0 users with that username');
    res.json({ loggedIn: false });
    return;
  }

  // below imported from hashing which use argon2 to 'hash' and 'verify' password, if it's not match, then log res.json => loggedIn: false
  if (!(await verifyHashMatchesPassword(users[0].password_hash, password))) {
    console.log("Login.ts--denied login - password doesn't match");
    res.json({ loggedIn: false });
    return;
  }
  // else if it matches, loggedIn: true
  // console.log('YOU ARE logged in');

  // set a token for user who registered for 8 hours, use crypto
  const maxAge = 60 * 60 * 8;
  const token = crypto.randomBytes(24).toString('base64');

  console.log('Login.ts--session-token: ', token);

  // below imported from db, which insert userId and token to sessions Table(00006)
  await deleteSessionByTime();
  await insertSession(users[0].id, token);

  // use serialize to set cookie token
  const cookie = serialize('token', token, {
    maxAge,
    expires: new Date(Date.now() + maxAge * 1000),

    // Important for security
    // Deny cookie access from JavaScript

    httpOnly: true,
    // Important for security
    // Set secure cookies on production
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  });

  res.setHeader('Set-Cookie', cookie);

  res.json({ loggedIn: true });
}
