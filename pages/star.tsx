import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { NextPageContext } from 'next';

type dogsList = {
  id: string;
  className: string;
  src: string;
  url: string;
  h3: string;
  p: string;
};

type Props = { dogsList: dogsList[] };

export default function Star(props: Props) {
  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <h1>Stars</h1>
        <ul>
          {props.dogsList.map((list, i) => {
            return (
              <li className={list.className} key={i}>
                <div className="starDogs">
                  {/* Use Typescript, for Link error add : yarn upgrade @types/react@latest  */}
                  <Link href={list.url}>
                    <a>
                      <img
                        src={list.src}
                        alt={list.className}
                        width="120px"
                        height="120px"
                      />
                    </a>
                  </Link>
                  <h3>{list.h3}</h3>
                  <p>{list.p}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
      <style jsx>{`
        h1 {
          text-align: center;
        }

        .starDogs {
          display: flex;
          margin: 1.6em auto;
        }

        ul {
          list-style: none;
          padding: 10px;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        }
        li {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #e7ecf0;
        }
        p {
          font-size: 1em;
          color: darkcyan;
          text-decoration-line: overline;
          text-align: center;
          padding: 10px;
        }
        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 10px;
        }
        img {
          box-shadow: 3px 11px 18px #7d7d7d7d;
        }

        @media (max-width: 450px) {
          h1 {
            font-size: 1.8em;
            margin-top: 2em;
          }
          h3 {
            font-family: 'Lucida Console', Monaco, monospace;
            font-size: 0.7em;
            text-align: left;
            margin-left: 2em;
          }
          p {
            font-size: 0.5em;
            margin-right: 0.5em;
          }
          li {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps(context: NextPageContext) {
  const { getDogs } = await import('../db.js');

  const dogsList = getDogs();

  if (dogsList === undefined) {
    return { props: {} };
  }
  return {
    props: { dogsList },
  };
}
