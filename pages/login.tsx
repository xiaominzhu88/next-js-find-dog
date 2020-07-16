import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Header from '../components/Header';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    // use a CSRF token and pass it along
    // with the fetch to be verified server-side

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
        //console.log('JSON: ', JSON.stringify({ username, password }));

        //console.log('RESPONSE: ', response);
        return response.json();
      })
      .then((json) => {
        //console.log('json: ', json); // loggedIn: true

        if (json.loggedIn === false) {
          setStatus('Failed logging in - check username and password');
        } else {
          setStatus('You are Logged in!!');
          // Redirect to homepage after 1 seconds
          setTimeout(() => {
            Router.replace('/home');
          }, 1000);
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
            <h1>Welcome</h1>
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
            <div className="loginButton">
              <button>Login</button>
            </div>
          </form>
        </div>

        <div className="right">
          <img src="./jogging.gif" alt="gif" />
        </div>

        <style jsx>{`
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
            margin: 1em auto;
            color: rgb(240, 93, 130);
            text-align: center;
          }

          .auth {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: Gill sans;
          }

          .left {
            background-color: #b5b1b5;
            width: 50%;
            height: auto;
            padding-left: 1em;
            padding-top: 4em;
          }
          .right {
            width: 50%;
          }

          button {
            height: 2.5em;
            width: 8em;
            background-color: rgb(240, 93, 130);
            border: none;
            text-align: center;
          }
          button:hover {
            background-color: yellow;
            border: none;
          }
          p {
            margin: 1em auto;
          }

          label {
            color: rgb(240, 93, 130);
          }
          input {
            margin: 1em auto;
            width: 80%;
            height: 2em;
            border-radius: 5px;
            border: none;
          }

          .submit {
            width: 5em;
            margin: 1em auto;
            background-color: rgb(240, 93, 130);
            color: #fff;
            border-radius: 5px;
          }
          img {
            width: 50vw;
            height: 50vh;
          }

          @media (max-width: 450px) {
            .auth {
              display: block;
              margin: 0 auto;
            }
            .left {
              padding: 1em;
              text-align: center;
              margin: 1em auto;
            }
            img {
              height: 20vh;
              margin: 0 auto;
            }

            h1 {
              font-size: 1.2em;
            }

            input {
              margin: 1em auto;
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

// in case not use api router
//export async function getServerSideProps(context: //GetServerSidePropsContext) {
//  // Redirect to homepage right away if logged in already
//
//  if (nextCookies(context).token) {
//    context.res.setHeader('location', '/');
//    context.res.statusCode = 302;
//    context.res.end();
//  }
//
//  return {
//    props: {},
//  };
//}
