import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const linkList = [
    { name: 'Fetch', url: '/fetch' },
    { name: 'Favourite', url: '/favourite' },
    { name: 'Search', url: '/search' },
    { name: 'About', url: '/about' },
    // { name: 'Contact', url: '/contact' },
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
        //console.log('header-response', response);

        if (response.ok !== true) {
          throw new Error('Error fetching session');
        }
        return response.json();
      })
      .then((json) => {
        if (json === true) {
          setUser('You are logged in! 👍');
        }
      })
      .catch((err) => {
        console.error('error fetching session', err);
      });
  }, []);

  //console.log('USER: ', user);

  return (
    <div className="app">
      <header className="nav-header">
        <div className="nav">
          <div className="logo">
            <span role="img" aria-label="emoji">
              🐶<p className="logo-text">Findogs</p>
            </span>
          </div>
        </div>
        <div className="links">
          {linkList.map((link, i) => {
            return (
              <Link href={link.url} key={i}>
                {/* use useRouter define current page link style */}
                <a className={router.pathname === link.url ? 'active' : ''}>
                  {link.name}
                </a>
              </Link>
            );
          })}
        </div>

        <p className="status">{user}</p>
      </header>
      <style jsx>{`
        .nav-header {
          margin: 0 auto;
          font-weight: 800;
          background: rgb(247, 138, 103);
          background: linear-gradient(
            90deg,
            rgba(247, 138, 103, 1) 0%,
            rgba(224, 39, 174, 1) 100%
          );
          box-shadow: 3px 11px 18px #b3d1e9;
          text-align: center;
          padding: 25px;
        }

        .links {
          display: inline-block;
        }
        a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2em;
          font-weight: 700;
          line-height: 1em;
          margin-right: 1em;
          font-family: monospace;
        }

        a:hover,
        .active {
          text-decoration: underline;
          color: silver;
          font-weight: 700;
          font-size: 1.2em;
        }

        h1 {
          font-size: 2.5em;
          margin: 1em auto;
          position: relative;
          color: rgb(6, 91, 134);
          text-shadow: 3px 5px 8px rgb(97, 134, 152);
          letter-spacing: 4px;
        }
        p {
          text-align: center;
          color: orange;
        }
        .logo {
          font-size: 3em;
        }
        .logo-text {
          margin: 0 0 0 15px;
          display: inline-block;
          font-weight: bold;
          font-family: Gill sans;
          letter-spacing: -1px;
          font-size: 45px;
          vertical-align: 5px;
          color: #fff;
        }
        .status {
          border-left: 1px solid #fff;
          padding-left: 2em;
          display: inline-block;
        }

        @media (max-width: 550px) {
          a {
            font-size: 1em;
          }
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
            font-size: 0.8em;
            line-height: 1.2em;
            padding: 1em 0;
            display: inline-block;
          }

          .status {
            border: none;
          }
        }
      `}</style>
    </div>
  );
}
