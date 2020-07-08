import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const pics = [
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
    // clear interval, although images will go faster and crazy !
    return () => clearInterval(interval);
    // wrap dependensies inside Array
  }, [index, getNextIndex, setIndexes, move, next]);

  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="content">
        <h2>Before you choose a dog ...</h2>
        <p className="about">
          While adopting a dog is super rewarding, it is also a life-changing.
          You need to be prepared: <br />
          * You're Going to Spend a Lot of Money <br />
          * Any Extra Mental and Physical Energy You Have? Yep, That Goes to the
          Dog
          <br />
          * Are You Ready for a Little Family Drama?
          <br />
          * Say Goodbye to Spontaneous Travel or Late Nights for That Matter
          <br />
          * It's Not Going to Be What You Expect
          <br />
        </p>{' '}
        <h2>You can go to search page and find your dogs</h2>
        <br />
        <div className="dog-items">
          <img src={pics[index]} alt="cute-dogs" />

          <p className="about-text">
            {' '}
            “Before you get a dog, <br />
            you can’t quite imagine what living with one might be like;
            <br /> Afterward, <br />
            you can’t imagine living any other way.” <br />– Caroline Knapp
            <br />
          </p>
          <p className="about-text">
            “When you adopt a dog, you have a lot of very good days and one very
            bad day.” <br />– W. Bruce Cameron
          </p>
        </div>
      </div>
      <div className="stars">
        <img src="/about-us-dog.jpg" alt="cute-dogs" />
        <br />
        <Link href="/star">
          <a>
            <div className="star-view">
              <Button variant="contained" color="secondary">
                Visit Our Stars
                <span role="img" aria-label="emoji">
                  🌟
                </span>
              </Button>
            </div>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');

          .content {
            margin: 0 50px;
          }
          h2 {
            margin-top: 2em;
            text-align: center;
            font-family: monospace;
            font-size: 2em;
          }
          .about-text {
            margin-left: 50px;
          }
          .dog-items {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 1em;
          }

          p {
            line-height: 2em;
            font-family: 'Fira Mono', monospace;
            margin-top: 10px;
            color: #9d9c9f;
          }

          img {
            width: 8em;
            height: 8em;
            border-radius: 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.33);
            margin-top: 1em;
          }
          .stars {
            margin: 0.5em auto;
            text-align: center;
          }
          span {
            margin-left: 0.5em;
          }
          a {
            text-decoration: none;
          }
          .stars {
            display: flex;
            align-items: flex-end;
            padding-left: 2.5em;
            margin-bottom: 2em;
          }
          .star-view {
            margin-left: 2.5em;
          }

          @media only screen and (max-width: 450px) {
            .about,
            .about-text {
              font-size: 0.8em;
              margin-left: 0;
            }
            .dog-items {
              display: block;
            }
            img {
              margin: 1em auto;
            }
            .stars {
              display: block;
              text-align: left;
              margin: 1em auto;
            }
            .star-view {
              margin: 1em auto;
            }
          }
        `}
      </style>
    </>
  );
}
