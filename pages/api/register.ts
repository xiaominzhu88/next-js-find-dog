import { NextApiRequest, NextApiResponse } from 'next';
import Tokens from 'csrf';
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const argon2 = require('argon2');

import { insertUser } from '../../db';

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const tokens = new Tokens();
  const secret = process.env.CSRF_TOKEN;
  const requestToken = req.body.csrf;

  if (typeof secret !== 'string') {
    throw new Error('Token secret misconfigured!');
  }
  console.log('register.ts--Request: ', req.body);
  const user = {
    username: req.body.username,
    password_hash: await argon2.hash(req.body.password),
  };

  if (tokens.verify(secret, requestToken)) {
    insertUser(user.username, user.password_hash)
      .then(() => {
        console.log('Succeeded');
      })
      .catch((err) => console.error('register.ts--did not work', err));
  } else {
    console.error('CSRF TOKEN NOT VALID!!');
  }
  res.json({
    user,
  });
  console.log('USER with username and password_hash: ', user);
}
