import React, { useState } from 'react';
import Head from 'next/head';
//import Header from '../components/Header';
//
//import Footer from '../components/Footer';

export default function Home() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <div className="auth">
        <div className="left">
          <div>
            <h1>Login</h1>
          </div>

          <form>
            <label>
              Name: <br />
              <input
                placeholder="user name"
                type="text"
                name="name"
                value={value}
                onChange={handleChange}
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
                onChange={passChange}
              />
            </label>
            <br />
            <button>Submit</button>
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
          .auth {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: 'Bitter', serif;
          }
          .left {
            display: block;
            background-color: beige;
            width: 50%;
            height: 60vh;
            padding: 4em;
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

      {/* <Footer /> */}
    </div>
  );
}
