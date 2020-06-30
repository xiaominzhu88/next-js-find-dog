import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import nextCookies from 'next-cookies';
import Router from 'next/router';
import Header from '../components/Header';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    // TODO: To secure your application even further,
    // generate and use a CSRF token and pass it along
    // with the fetch to be verified server-side
    // (see pages/register.tsx)

    console.log('username: ', username);
    console.log('Password: ', password);
    console.log('status: ', status);

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok !== true) {
          setStatus('Failed logging in - response is not ok');
        }
        console.log('JSON: ', JSON.stringify({ username, password }));

        console.log('RESPONSE: ', response);
        return response.json();
      })
      .then((json) => {
        console.log('json: ', json);

        if (json.loggedIn === false) {
          setStatus('Failed logging in - check username and password');
        } else {
          setStatus('You are Logged in!!');
          // Redirect to homepage after 3 seconds
          setTimeout(() => {
            Router.replace('/');
          }, 3000);
        }
      })
      .catch((err) => {
        setStatus(err);
      });
  }

  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="auth">
        <div className="left">
          <div>
            <h1>Login</h1>
            <p>{status}</p>
          </div>

          <form method="POST" onSubmit={onSubmit}>
            <label>
              Name: <br />
              <input
                placeholder="user name"
                type="text"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>{' '}
            <br />
            <label>
              Password: <br />
              <input
                placeholder="password"
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button>Login</button>
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
            color: lightblue;
            text-align: center;
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
            color: lightblue;
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
  // Redirect to homepage right away if logged in already

  if (nextCookies(context).token) {
    context.res.setHeader('location', '/');
    context.res.statusCode = 302;
    context.res.end();
  }

  return {
    props: {},
  };
}
