import React from 'react';
import Head from 'next/head';

function Footer() {
  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <footer className="footer">
        <p>Created by Zhu</p>
      </footer>
      <style jsx>
        {`
          p {
            text-align: center;
            font-weight: bold;
            font-family: Didot, serif;
          }
          footer {
            background-color: #e0e3e7;
            height: 100%;
            padding: 5px;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
