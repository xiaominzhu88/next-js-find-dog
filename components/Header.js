import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  const [user, setUser] = useState(null);

  const linkList = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Search', url: './search' },
    { name: 'Contact', url: '/contact' },
  ];

  if (user === null) {
    linkList.push({ name: 'Register', url: '/' });
    linkList.push({ name: 'Login', url: '/login' });
  } else {
    linkList.push({ name: 'Logout', url: '/logout' });
  }

  useEffect(() => {
    fetch('/api/checkLogin', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify({ user }),
    })
      .then((response) => {
        console.log('header-response', response);

        if (response.ok !== true) {
          throw new Error('Error fetching session');
        }
        return response.json();
      })
      .then((json) => {
        if (json === true) {
          setUser('You are logged in!');
        }
      })
      .catch((err) => {
        console.error('error fetching session', err);
      });
  }, []);

  console.log('USER: ', user);

  return (
    <div className="app">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <header className="nav-header">
        <div className="nav">
          <h1>Find-your-dog</h1>
          <p>{user}</p>
        </div>
        <div className="links">
          {linkList.map((link, i) => {
            return (
              <Link href={link.url} key={i}>
                <a>{link.name}</a>
              </Link>
            );
          })}
        </div>
      </header>
      <style jsx>{`
        .nav-header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
          font-family: 'Bitter', serif;
          font-weight: 800;
          background-color: #e0e3e7;
          box-shadow: 3px 11px 18px #b3d1e9;
          background-position: fixed;
        }
        a {
          text-decoration: none;
          color: #1494cd;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
          margin-right: 1em;
        }
        a:hover {
          text-decoration: underline;
          color: hotpink;
          font-weight: 700;
          font-size: 1.2em;
        }

        .links {
          justify-content: space-between;
          align-items: center;
          display: flex;
        }

        h1 {
          font-size: 2.5em;
          margin: 1em auto;
          position: relative;
          color: rgb(6, 91, 134);
          text-shadow: 3px 5px 8px rgb(97, 134, 152);
          letter-spacing: 4px;
        }

        @media (max-width: 450px) {
          h1 {
            font-size: 1.5em;
          }
          .nav-header {
            display: flex;
            flex-direction: column;
          }

          a {
            font-size: 0.5em;
            line-height: 1.2em;
            margin-bottom: 1em;
          }
          a:hover {
            text-decoration: underline;
            color: hotpink;
            font-size: 0.5em;
          }
        }
      `}</style>
    </div>
  );
}
