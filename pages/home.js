import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const apiKey = process.env.apiKey;

  const [dogImageUrl, setDogImageUrl] = useState(
    'https://cdn2.thedogapi.com/images/VSraIEQGd.jpg',
  );
  const [dogs, setDogs] = useState([]);

  //if (dogs.length === 0 || !dogs) return <p>No dogs found</p>;

  const fetchData = () => {
    fetch('https://api.thedogapi.com/v1/images/search', {
      method: 'GET',
      dataType: 'JSON',
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        console.log(result.map((dog) => dog.breeds));

        const newUrl = result.map((a) => a.url);
        const dogBreeds = result.map((dog) => dog.breeds);
        console.log(typeof dogName);
        console.log(dogBreeds[0].map((a) => a.name));

        const dogName = dogBreeds[0].map((a) => a.name);

        setDogImageUrl(newUrl);
        setDogs(dogName);
      })
      .then((error) => {
        return error;
      });
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
          <img alt="dog-images" src={dogImageUrl} />
          <button onClick={changeImage}>Change</button>
          <button>Yes</button>
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
      <div>
        <p>{dogs}</p>
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
            font-size: 1.5em;
            color: #1494cd;
          }
          button {
            margin-bottom: 1em;
            width: 5em;
            height: 3em;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 2px 9px 11px #1494cd;
            background-color: rgb(217, 236, 230);
            font-family: cursive;
            font-size: 1em;
            font-weight: bold;
            outline: none;
          }
          button:hover {
            background-color: yellow;
            color: red;
            font-weight: 700;
          }
          button:active {
            transition: transformY(4px);
            background-color: rgb(235, 208, 121);
          }
        `}
      </style>
    </div>
  );
}
