import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import nextCookies from 'next-cookies';
import Link from 'next/link';
export default function SearchDogs({ sum }) {
  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="favorite-sum">
        <ul>
          {sum.map((eachFavorite, i) => {
            return (
              <div className="favorite-list" key={i}>
                <li>
                  <img src={eachFavorite.dogImageUrl} alt="favorite-dog" />
                </li>
                <li>
                  <h3> {eachFavorite.name}</h3>
                </li>
                <li>
                  <b>Life:</b> {eachFavorite.lifeSpan}
                </li>
                <li>
                  <b>Breed Group: </b>
                  {eachFavorite.breedGroup}
                </li>
                <li>
                  {' '}
                  <b>Temperament: </b>
                  {eachFavorite.char}
                </li>

                <li>
                  <Link href="/contact">
                    <a>
                      <button>
                        Adopt Me
                        <span role="img" aria-label="emoji">
                          💌
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      <Footer />
      <style jsx>
        {`
          h2 {
            margin-top: 2em;
            text-align: center;
            font-family: monospace;
            font-size: 2em;
          }
          img {
            width: 6em;
            height: 6em;
            border-radius: 50%;
          }
          ul {
            display: flex;
            padding: 2em;
          }
          li {
            list-style: none;
            margin-right: 2em;
            font-size: 0.9em;
          }
          .favorite-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            line-height: 1.5em;
            margin: 1em auto;
          }

          @media only screen and (max-width: 450px) {
            .about,
            .about-text {
              font-size: 0.8em;
            }
            ul {
              display: block;
              margin: 0 auto;
            }
            li {
              font-size: 0.9em;
              margin: 0.5em auto;
            }
          }
        `}
      </style>
    </>
  );
}

export function getServerSideProps(context) {
  const { sum } = nextCookies(context);
  console.log(sum);
  return {
    props: {
      sum: sum === undefined ? [] : sum,
    },
  };
}
