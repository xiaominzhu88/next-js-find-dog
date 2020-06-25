import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Header() {
  const linkList = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Search', url: './search1' },
    { name: 'Contact', url: '/contact' },
  ];
  return (
    <div className="app">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <header className="nav-header">
        <div className="nav">
          <h1>Find-your-dog</h1>
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

export default Header;
