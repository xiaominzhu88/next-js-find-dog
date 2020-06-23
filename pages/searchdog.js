import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SearchDogs(props) {
  const id = props.fetchedDogs;

  console.log(id);
  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="about-us">
        <h2>Search Content</h2>
      </div>

      <Link href="/searchdog/">
        <a>
          <button className="toList">List</button>
        </a>
      </Link>

      <Footer />
      <style jsx>
        {`
          h2 {
            margin-top: 2em;
            text-align: center;
            font-family: monospace;
            font-size: 2em;
          }

          @media only screen and (max-width: 450px) {
            .about,
            .about-text {
              font-size: 0.8em;
            }
          }
        `}
      </style>
    </>
  );
}
