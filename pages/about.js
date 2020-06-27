import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pics = [
  '/about-us-dog.jpg',
  '/favicon.jpg',
  '/bullterrier.jpg',
  '/englischedogge.jpg',
  '/no-dog.jpg',
  '/bichon-frise.jpg',
  '/belgian-tervuren.jpg',
];

export default function About() {
  const indexStart = 0;

  const [index, setIndex] = useState(indexStart);
  const [move, setMove] = useState(false);
  const [next, setNext] = useState();

  // Follow the error and use callback wrap
  const getNextIndex = useCallback(
    (idx) => {
      return idx >= pics.length - 1 ? 0 : index + 1;
    },
    [index],
  );

  const setIndexes = useCallback(
    (idx) => {
      setIndex(idx);
      setNext(getNextIndex(idx));
    },
    [getNextIndex],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMove(true);

      setTimeout(() => {
        setMove(false);
        setIndexes(getNextIndex(index));
      });
    }, 1500);
    // Here i have to clear interval, although images will go faster and crazy !
    return () => clearInterval(interval);
    // Here I have to wrap dependensies inside Array
  }, [index, getNextIndex, setIndexes]);

  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="about-us">
        <h2>About Us</h2>
      </div>
      <div>
        <p className="about">
          Dogs’ lives are short, but you know that going in. <br />
          You know the pain is coming, <br />
          so you live fully in the moment with her, never fail to share her joy
          or delight in her innocence.
          <br />
          <br />
          ⬇️
        </p>{' '}
        <div className={`current pic ${move}`}>
          <img src={pics[index]} alt="cute-dogs" />
        </div>
        <br />
        <p className="about-text">
          {' '}
          “Before you get a dog, <br />
          you can’t quite imagine what living with one might be like;
          <br /> Afterward, <br />
          you can’t imagine living any other way.” <br />– Caroline Knapp
          <br />
          🔮
        </p>
        <p className="about-text">
          “When you adopt a dog, you have a lot of very good days and one very
          bad day.” <br />– W. Bruce Cameron
        </p>
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
          .about {
            text-align: center;
            font-family: monospace;
            line-height: 2em;
            padding: 5px;

            letter-spacing: 0.1em;
          }
          .about-text {
            text-align: center;
            letter-spacing: 0.2em;
            line-height: 2em;
            font-family: monospace;
          }
          .current {
            padding: 5px;
            display: flex;
            justify-content: center;
          }
          img {
            width: 8em;
            height: 8em;
            border-radius: 50%;
            box-shadow: 3px 11px 18px #1b1a1aed;
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
