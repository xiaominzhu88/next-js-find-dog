import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';

export default function Home() {
  const apiKey = process.env.apiKey;

  const [dogImageUrl, setDogImageUrl] = useState(
    'https://cdn2.thedogapi.com/images/VSraIEQGd.jpg',
  );
  const [name, setName] = useState(['Bull Terrier']);
  const [lifeSpan, setLifeSpan] = useState(['10 – 12 years']);
  const [char, setChar] = useState([
    'Trainable, Protective, Sweet-Tempered, Keen, Active',
  ]);
  const [breedGroup, setBreedGroup] = useState(['Terrier']);

  //if (dogs.length === 0 || !dogs) return <p>No dogs found</p>;

  const fetchData = () => {
    fetch('https://api.thedogapi.com/v1/images/search', {
      method: 'GET',
      dataType: 'JSON',
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);

        const newUrl = result.map((a) => a.url);
        const dogBreeds = result.map((dog) => dog.breeds);

        //console.log(dogBreeds[0].map((a) => a.name));

        const dogName = dogBreeds[0].map((a) => a.name);
        const life = dogBreeds[0].map((a) => a.life_span);
        const temperament = dogBreeds[0].map((a) => a.temperament);
        const dogBreedGroup = dogBreeds[0].map((a) => a.breed_group);

        if (!dogName) {
          return 'Oh there is no information, enjoy the image';
        } else {
          setDogImageUrl(newUrl);
          setName(dogName);
          setLifeSpan(life);
          setChar(temperament);
          setBreedGroup(dogBreedGroup);
        }

        //console.log(result.map((dog) => dog.breeds));
      })
      .then((error) => {
        return error;
      });
  };

  //const images = [];

  //  function preload() {
  //    // use process.browser => window/Image not defined
  //    if (process.browser) {
  //      for (let i = 0; i < images.length; i++) {
  //        images[i] = new window.Image();
  //        images[i].src = preload.images[i];
  //      }
  //      setPreloadImg('/loading1.jpg');
  //    }
  //  }

  function changeImage(e) {
    e.preventDefault();
    fetchData();
  }

  // ---------------- image slide ----------------------------
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

  // -------------------  Preload image ------------------------
  //  function preload(url, callback) {
  //    if (process.browser) {
  //      let image = new window.Image();
  //      if (image.complete) {
  //        callback.call(image);
  //        return;
  //      }
  //      image.onload = () => {
  //        callback.call(image);
  //      };
  //      image.src = url;
  //    }
  //  }
  //  preload('/loading1.jpg', () => {
  //    console.log('IMAGE LOADED');
  //  });

  function goSum() {
    const sumDogs = {
      dogImageUrl: dogImageUrl,
      name: name,
      lifeSpan: lifeSpan,
      char: char,
      breedGroup: breedGroup,
    };

    const favorite = Cookies.getJSON('sum') || [];
    favorite.push(sumDogs);
    Cookies.set('sum', favorite);
    //window.location.reload();
  }
  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="dogList">
        <div className="images">
          <img alt="dog-images" src={dogImageUrl} />
          <img src={pics[index]} alt="cute-dogs" />
        </div>
      </div>

      <div className={`current pic ${move}`}>
        <div className="buttons">
          <div className="3buttons">
            <Button
              onClick={() => goSum()}
              variant="contained"
              color="secondary"
            >
              Like
            </Button>
            <br />
            <br />
            <Button onClick={changeImage} variant="contained">
              to next
            </Button>
            <Link href="/sum">
              <a>
                <Button
                  onClick={() => goSum()}
                  variant="contained"
                  color="primary"
                >
                  to favourite
                </Button>
              </a>
            </Link>
          </div>
          <Link href="/star">
            <a>
              <div>
                <Button variant="contained" color="secondary">
                  View Our Stars
                </Button>
              </div>
            </a>
          </Link>
        </div>
      </div>

      {name.length !== 0 ? (
        <div className="information">
          <p>{name}</p>
          <h4>
            Breed-group:
            <span role="img" aria-label="emoji">
              🎋
            </span>{' '}
            {breedGroup}
          </h4>
          <h4>
            Life:
            <span role="img" aria-label="emoji">
              🔅
            </span>{' '}
            {lifeSpan}
          </h4>
          <h4>
            Temperament:
            <span role="img" aria-label="emoji">
              🎲
            </span>{' '}
            {char}
          </h4>
        </div>
      ) : (
        <p>
          Oh there is no information <br /> To next one?
        </p>
      )}

      <Footer />
      <style jsx>
        {`
          .dogList {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          img {
            width: 9em;
            height: 9em;
            border-radius: 50%;
            box-shadow: 3px 11px 18px #1b1a1aed;
            margin: 2em 8.5em;
          }
          p {
            text-align: center;
            letter-spacing: 0.2em;
            line-height: 1em;
            font-family: monospace;
            font-size: 1.5em;
            color: #e078b3;
          }
          h4 {
            text-align: center;
            letter-spacing: 0.2em;
            line-height: 2em;
            font-family: monospace;
            color: #1494cd;
          }
          .buttons {
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            margin: 2em auto;
          }
          a {
            text-decoration: none;
          }

          @media (max-width: 450px) {
            img {
              width: 5em;
              height: 5em;
            }
            .dogList {
              display: block;
              margin: 2em auto;
            }
          }
        `}
      </style>
    </div>
  );
}
