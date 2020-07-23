import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import Header from '../components/Header';
import Router from 'next/router';

type Props = {
  csrfToken: string;
};

export default function Signup(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  // use typescript onsubmit=>FormEvent
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        csrf: props.csrfToken,
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok !== true) {
          setStatus('Failed register - response is not ok');
        }
        return res.json();
      })
      .then((json) => {
        console.log('JSON with HASH_password: ', json);

        if (json.username === '') {
          setStatus('NO USERNAME!');
        } else {
          setStatus('You are signed up!');
          setTimeout(() => {
            Router.replace('/login');
          }, 1000);
        }
      })
      .catch(() => setStatus('sign up nop'));
  }

  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="auth">
        <div className="left">
          <div className="left-text">
            <h1>Register</h1>
            <p>{status}</p>
          </div>

          <form method="POST" onSubmit={onSubmit}>
            <label>
              Name: <br />
              <input
                placeholder="user name"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>{' '}
            <br />
            <label>
              Password: <br />
              <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            {/* if use API, then do not need input below */}
            {/* Use API can remove hidden input below */}
            {/* <input type="hidden" name="csrf" value={props.csrfToken} /> */}
            <div className="signUpButton">
              <button>
                <span role="img" aria-label="emoji">
                  ✍️
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="right"></div>

        <style jsx>{`
          html,
          body {
            display: block;
            margin: 0;
          }

          .start {
            margin: 2em auto;
            text-align: center;
          }
          h1 {
            margin: 0 auto;
            color: rgb(240, 93, 130);
            text-align: center;
          }

          label {
            color: rgb(240, 93, 130);
          }

          .auth {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: Gill sans;
            margin-top: 2em;
            padding: 0.5em;
          }
          form {
            margin: 1em auto;
          }
          .left {
            background-color: #b5b1b5;
            width: 50%;
            height: auto;
            padding-left: 1em;
            padding-top: 4em;
          }
          .right {
            background-image: url('/welcome.jpg');
            width: 50%;
            height: 65vh;
            background-position: 25% 75%;
            animation: flydog 16s linear infinite;
          }

          button {
            height: 2.5em;
            width: 8em;
            border: none;
            background-color: rgb(240, 93, 130);
            margin: 2em auto;
            text-align: center;
            border-radius: 5px;
          }
          button:hover {
            background-color: yellow;
            border: none;
          }

          @keyframes flydog {
            from {
              background-position: 0px 0px;
            }
            to {
              background-position: 300px 0px;
            }
          }
          input {
            margin: 1em auto;
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
            .container {
              margin: 0 auto;
              text-align: center;
            }
            .auth {
              display: block;
            }
            .left {
              padding: 2em;
              text-align: center;
              margin: 1em auto;
            }
            .left-text {
              margin: 1em auto;
            }

            .right {
              background-image: url('/welcome.jpg');
              background-position: 50% 50%;
              width: 100vw;
              height: 80vh;
            }

            h2 {
              margin: 2em auto;
              color: pink;
              text-align: center;
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
  const path = require('path');
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
  const Tokens = (await import('csrf')).default;
  const tokens = new Tokens();

  // secret = csrf
  const secret = process.env.CSRF_TOKEN;

  // typeScript secret as string | undefined
  if (typeof secret !== 'string') {
    throw new Error('Token secret misconfigured!');
  }

  // const queryString = require('query-string');

  // const { hashPassword } = await import('../hashing');
  // const { insertUser } = await import('../db.js');

  // if (typeof secret !== 'string') {
  //   throw new Error('Token secret misconfigured!');
  // }

  // let buffer = '';
  // context.req.on('data', (chunk) => {
  //   buffer += chunk;
  // });

  // context.req.on('end', async () => {
  //   // body contains username and password(convert as csrf)
  //   const body = queryString.parse(Buffer.from(buffer).toString());
  //   console.log('body: ', body);

  //   if (
  //     typeof body.username !== 'string' ||
  //     typeof body.password !== 'string'
  //   ) {
  //     console.log('No username or password passed in body');
  //     return;
  //   }

  //   // below imported from hashing which hashes password
  //   const username = body.username;
  //   const passwordHash = await hashPassword(body.password);

  //   console.log('passwordHashed: ', passwordHash);

  //   const requestToken = body.csrf;
  //   console.log('requestToken: ', requestToken);

  //   if (typeof requestToken !== 'string') {
  //     throw new Error('No CSRF token passed!');
  //   }

  //   // insertUser below imported from db, which insert username and password_hash into users Table(00005) as registered
  //   if (tokens.verify(secret, requestToken)) {
  //     insertUser(username, passwordHash)
  //       .then(() => {
  //         console.log('succeeded');
  //       })
  //       .catch((err) => console.error("didn't work", err));
  //   } else {
  //     console.error('CSRF token not valid!!');
  //   }
  // });

  const props: Props = {
    csrfToken: tokens.create(secret),
  };

  if (props === undefined) {
    return {
      props: {},
    };
  }
  return {
    props,
  };
}
