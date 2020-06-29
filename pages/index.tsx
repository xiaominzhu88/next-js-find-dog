import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
//import { getServerSideProps } from './login';
import Link from 'next/link';
type Props = {
  csrfToken: string;
};

export default function Home(props: Props) {
  //const [value, setValue] = useState('');
  //const [password, setPassword] = useState('');

  //   function handleChange(e) {
  //     setValue(e.target.value);
  //
  //   function passChange(e) {
  //     setPassword(e.target.value);
  //   }

  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="auth">
        <div className="left">
          <form method="POST">
            <label>
              Name: <br />
              <input
                placeholder="user name"
                type="text"
                name="username"
                //  value={value}
                //   onChange={handleChange}
              />
            </label>{' '}
            <br />
            <label>
              Password: <br />
              <input
                placeholder="password"
                type="password"
                name="password"
                //  value={password}
                //   onChange={passChange}
              />
            </label>
            <br />
            <input type="hidden" name="csrf" value={props.csrfToken} />
            <p>{props.csrfToken}</p>
            <Link href="./login">
              <a>
                <button>Sign up</button>
              </a>
            </Link>
          </form>
        </div>

        <div className="right">
          <h2>Welcome</h2>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
            margin: 2em auto;
          }
          .start {
            margin: 2em auto;
            text-align: center;
          }
          h1 {
            margin: 0 auto;
            color: pink;
            text-align: center;
          }
          p {
            color: pink;
          }
          .auth {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: 'Bitter', serif;
          }
          .left {
            background-color: beige;
            width: 50%;
            height: 70vh;
            padding-left: 1em;
          }
          .right {
            background-image: url('/welcome.jpg');
            width: 50%;
            height: 65vh;
            background-position: 25% 75%;
            animation: flybirds 16s linear infinite;
          }
          @keyframes flybirds {
            from {
              background-position: 0px 0px;
            }
            to {
              background-position: 300px 0px;
            }
          }
          label {
            color: pink;
          }
          input {
            margin: 1em auto;
            width: 50%;
            height: 2em;
            border-radius: 5px;
            border: none;
          }
          .submit {
            width: 5em;
            margin: 1em auto;
            background-color: pink;
          }
          h2 {
            margin: 3em auto;
            color: pink;
            text-align: center;
          }
          @media (max-width: 450px) {
            .auth {
              display: block;
            }
            .left {
              width: 100vw;
              height: 45vh;
              padding: 2em;
            }
            .right {
              background-image: url('/welcome.jpg');
              background-position: 50% 50%;
              width: 100vw;
              height: 60vh;
            }
            h2 {
              margin: 2em auto;
              color: pink;
              text-align: center;
            }
            input {
              margin: 0 auto;
            }
            .submit {
              width: 5em;
              margin: 1em auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { hashPassword } = await import('../hashing');
  const queryString = require('query-string');
  const { insertUser } = await import('../db.js');
  require('dotenv').config();

  const Tokens = (await import('csrf')).default;
  const tokens = new Tokens();

  const secret = process.env.CSRF_TOKEN;
  console.log('Secret: ', secret);

  if (typeof secret !== 'string') {
    throw new Error('Token secret misconfigured!');
  }

  let buffer = '';
  context.req.on('data', (chunk) => {
    buffer += chunk;
  });

  context.req.on('end', async () => {
    const body = queryString.parse(Buffer.from(buffer).toString());

    if (
      typeof body.username !== 'string' ||
      typeof body.password !== 'string'
    ) {
      console.log('No username or password passed in body');
      return;
    }

    const username = body.username;

    const passwordHash = await hashPassword(body.password);

    await insertUser(body.username, body.password)
      .then(() => {
        console.log('seccess');
      })
      .catch(() => {
        console.log('failed');
      });

    const requestToken = body.csrf;
    console.log('requestToken: ', requestToken);

    if (typeof requestToken !== 'string') {
      throw new Error('No CSRF token passed!');
    }

    if (tokens.verify(secret, requestToken)) {
      // console.log(user);
      insertUser(username, passwordHash)
        .then(() => console.log('succeeded'))
        .catch((err) => console.error("didn't work", err));
    } else {
      console.error('CSRF token not valid!!');
    }
  });

  const props: Props = {
    csrfToken: tokens.create(secret),
  };

  if (!props.csrfToken) {
    return { props: {} };
  }
  return {
    props,
  };
}
