import React, { useState } from 'react';

export default function Auth() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }
  function passChange(e) {
    setPassword(e.target.value);
  }

  return (
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
              type="text"
              name="password"
              value={password}
              onChange={passChange}
            />
          </label>
          <br />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>

      <div className="right">
        <h2>Welcome</h2>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');
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
          margin: 2em auto;
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
        }
      `}</style>
    </div>
  );
}
