import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home({ data }) {
  const [dogData, setDogData] = useState(data);

  const fetchData = async () => {
    const req = await fetch('https://dog.ceo/api/breeds/image/random');
    const newData = await req.json();
    return setDogData(newData);
  };
  function changeImage(e) {
    e.preventDefault();
    fetchData();
  }

  const pics = [
    '/about-us-dog.jpg',
    '/favicon.jpg',
    '/bullterrier.jpg',
    '/englischedogge.jpg',
  ];
  const indexStart = 0;
  const [index, setIndex] = useState(indexStart);
  const [move, setMove] = useState(false);
  const [next, setNext] = useState();

  // Follow the error and use callback wrap
  const getNextIndex = useCallback(
    (idx) => {
      return idx >= pics.length - 1 ? 0 : index + 1;
    },
    [index, pics.length],
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
    }, 4000);
    // Here clear interval, although images will go faster and crazy !
    return () => clearInterval(interval);
    // Here I have to wrap dependensies inside Array
  }, [index, getNextIndex, setIndexes]);

  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="dogList">
        <div>
          <img alt={data.message} src={data.message} />
          <button onClick={changeImage}>Change</button>
          <button>Yes</button>
          {/*<p>Yes</p>*/}
        </div>

        <div className={`current pic ${move}`}>
          <img src={pics[index]} alt="cute-dogs" />
          <Link href="/star">
            <a>
              <button>Our Stars</button>
            </a>
          </Link>
        </div>
      </div>

      <Footer />
      <style jsx>
        {`
          .dogList {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          img {
            width: 8em;
            height: 8em;
            border-radius: 50%;
            box-shadow: 3px 11px 18px #1b1a1aed;
            margin: 2em auto;
          }
          p {
            text-align: center;
            letter-spacing: 0.2em;
            line-height: 2em;
            font-family: monospace;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

  //const res = await fetch(
  //  'https://www.petrescue.com.au/api/listings?states=WA,NSW&interstate=true&////gender=male',
  //);

  const data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
}
