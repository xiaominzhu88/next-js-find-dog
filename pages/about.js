import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from 'next/router';
//import Button from '@material-ui/core/Button';

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
    // clear interval!
    return () => clearInterval(interval);
    // wrap dependensies inside Array
  }, [index, getNextIndex, setIndexes, move, next]);

  return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="about findogs page" content="about" />
      </Head>
      <Header />

      <div className="content">
        <h2>Before you choose a dog ...</h2>
        <p className="about">
          While adopting a dog is super rewarding, it is also a life-changing.
          You need to be prepared: <br />
          <br />
          * You're Going to Spend a Lot of Money <br />
          <br />
          * Any Extra Mental and Physical Energy You Have? Yep, That Goes to the
          Dog
          <br />
          <br />
          * Are You Ready for a Little Family Drama?
          <br />
          <br />
          * Say Goodbye to Spontaneous Travel or Late Nights for That Matter
          <br />
          <br />
          * It's Not Going to Be What You Expect
          <br />
          <br />
        </p>{' '}
        <h2 className="testimonials">Testimonials</h2>
        <br />
        <div className="dog-items">
          {/* use dynamically inline-style instead img tag*/}
          <div
            style={{ backgroundImage: `url(${pics[index]}) ` }}
            alt="cute-dogs"
            className="dynamic-images"
          ></div>

          <p className="about-text">
            {' '}
            “Before you get a dog, <br />
            you can’t quite imagine what living with one might be like.” <br />
            <span style={{ color: 'black', fontWeight: '900' }}>
              – Caroline Knapp
            </span>
            <br />
          </p>
          <p className="about-text">
            “When you adopt a dog, you have a lot of very good days and one very
            bad day.” <br />
            <span style={{ color: 'black', fontWeight: '900' }}>
              – W. Bruce Cameron
            </span>
          </p>
        </div>
      </div>

      <div className="finest">
        <h2 className="recommendations">
          <span role="img" aria-label="findogs finest">
            💥
          </span>
          Recommendations: Findogs Finest
          <span role="img" aria-label="findogs finest">
            💥
          </span>
        </h2>
        <p>
          If you have difficulties choosing a dog, we have exclusive
          recommendations for you.
        </p>
        <p>* Don't be shy just try ...</p>
      </div>

      <div className="stars">
        <div className="about-us-dog"></div>

        <div className="star-view">
          {/* <Button
            onClick={() => Router.push('/star')}
            variant="contained"
            color="secondary"
          >
            Visit Our recommendations
            <span role="img" aria-label="emoji">
              🌟
            </span>
          </Button> */}
          <button
            className="viewButton"
            type="button"
            onClick={() => Router.push('/recommendations')}
          >
            <span className="MuiButton-label" role="img" aria-label="emoji">
              💥
            </span>
          </button>
        </div>
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
            letter-spacing: 0.2em;
          }
          .testimonials,
          .recommendations {
            letter-spacing: 0.08em;
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

          .dynamic-images {
            height: 20em;
            min-width: 6em;
            border-radius: 20px;
            background-size: contain;
            margin-top: 1.1em;
            margin-bottom: 3.5em;
          }
          .about-us-dog {
            background-image: url('/about-us-dog.jpg');
            background-size: cover;
            height: 8em;
            width: 10em;
            background-position: right;
            border-radius: 20px;
          }

          .stars {
            margin: 0.5em auto;
            text-align: center;
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
          .finest {
            padding: 2em;
          }

          .MuiButton-label {
            font-size: 5em;
          }
          .viewButton {
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
          button {
            border: none;
            cursor: pointer;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.33);
          }

          button:hover .MuiButton-label {
            font-size: 6em !important;
            transition: 0.5s;
          }
          button:focus {
            outline: 0 !important;
          }
          button:active {
            transition: transformY(4px);
            background-color: rgb(235, 208, 121);
          }

          @media (max-width: 650px) {
            h2 {
              font-size: 1.5em;
            }
            p {
              font-size: 1em;
            }
            .stars {
              display: block;
            }
            .star-view {
              margin: 1em auto;
            }
            .dog-items {
              display: block;
            }
            .dynamic-images {
              height: 10em;
              min-width: 5.5em;
              background-size: contain;
              background-size: cover;
              background-position: center;
              margin: 0 22px 30px;
            }
            .about-us-dog {
              margin: 0 22px 30px;
            }
          }
          @media (max-width: 450px) {
            .about,
            .about-text {
              font-size: 0.8em;
              margin-left: 0;
            }
            .stars {
              display: block;
              text-align: center;
              margin: 1em auto;
            }
            .star-view {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}
