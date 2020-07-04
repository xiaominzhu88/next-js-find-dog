import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';

// below is preloading with SWR
//import useSWR from 'swr';
// const fetcher = (url, apiKey) =>
//   fetch(url, {
//     method: 'GET',
//     dataType: 'JSON',
//     headers: { 'X-Api-Key': `${apiKey}` },
//   }).then((r) => r.json());

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

const dogs = [
  {
    breeds: [
      {
        weight: { imperial: '65 - 100', metric: '29 - 45' },
        height: { imperial: '23 - 25', metric: '58 - 64' },
        id: 9,
        name: 'Bull Terrier',
        bred_for: 'Hauling heavy freight, Sled pulling',
        breed_group: 'Terrier',
        life_span: '10 – 12 years',
        temperament: 'Trainable, Protective, Sweet-Tempered, Keen, Active',
      },
    ],
    id: 'GhtSdrW29',
    url: 'https://cdn2.thedogapi.com/images/VSraIEQGd.jpg',

    width: 3888,
    height: 2592,
  },
  {
    breeds: [
      {
        weight: { imperial: '45 - 70', metric: '20 - 32' },
        height: { imperial: '20 - 24', metric: '51 - 61' },
        id: 260,
        name: 'Wirehaired Pointing Griffon',
        bred_for:
          'Gundog, "swamp-tromping", Flushing, pointing, and retrieving water fowl & game birds',
        breed_group: 'Sporting',
        life_span: '12 - 14 years',
        temperament: 'Loyal, Gentle, Vigilant, Trainable, Proud',
      },
    ],
    id: 'Bkam2l9Vm',
    url: 'https://cdn2.thedogapi.com/images/Bkam2l9Vm_1280.jpg',
    width: 2328,
    height: 1604,
  },
];
export default function Home() {
  const apiKey = process.env.apiKey;

  //below using SWR preloading
  // const { data, error } = useSWR(
  //   ['https://api.thedogapi.com/v1/images/search', apiKey],
  //   fetcher,
  // );
  // if (data && !dogs.includes(data)) {
  //   dogs.push(data);
  //   console.log(data);
  // }

  // -------------------  Preloading image ------------------------

  const loadingUrl = './gif.gif';

  const [loading, setLoading] = useState(false);
  const [dogId, setDogId] = useState(0);

  // define a dog Array which being loaded at the beginning
  const dog = dogs[dogId];
  console.log('DOG: ', dog);

  const sumDogs = {
    dogImageUrl: dog.url,
    name: dog.breeds[0]?.name,
    lifeSpan: dog.breeds[0]?.life_span,
    char: dog.breeds[0]?.temperament,
    breedGroup: dog.breeds[0]?.breed_group,
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://api.thedogapi.com/v1/images/search', {
      method: 'GET',
      dataType: 'JSON',
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((r) => r.json())
      .then((json) => {
        setLoading(false);
        dogs.push(json[0]);
      });
  }, [apiKey, dogId]);

  useEffect(() => {
    preloadImage(dogs[dogId + 1].url);
  }, [dogId, dog]);

  // below is using state with initial content where the page first started
  // const [dogImageUrl, setDogImageUrl] = useState(
  //   'https://cdn2.thedogapi.com/images/VSraIEQGd.jpg',
  // );
  // const [name, setName] = useState(['Bull Terrier']);
  // const [lifeSpan, setLifeSpan] = useState(['10 – 12 years']);
  // const [char, setChar] = useState([
  //   'Trainable, Protective, Sweet-Tempered, Keen, Active',
  // ]);
  // const [breedGroup, setBreedGroup] = useState(['Terrier']);

  const fetchData = () => {
    setDogId(dogId + 1);

    // below is using direct url fetch, update state every button click, it is slowly than useEffect with defined a dog Array
    // fetch('https://api.thedogapi.com/v1/images/search', {
    //   method: 'GET',
    //   dataType: 'JSON',
    //   headers: { 'X-Api-Key': `${apiKey}` },
    // })
    //   .then((res) => res.json())

    //   .then((result) => {
    //     setLoading(true);

    //     const newUrl = result.map((a) => a.url);
    //     const dogBreeds = result.map((dog) => dog.breeds);
    //     const dogName = dogBreeds[0].map((a) => a.name);
    //     const life = dogBreeds[0].map((a) => a.life_span);
    //     const temperament = dogBreeds[0].map((a) => a.temperament);
    //     const dogBreedGroup = dogBreeds[0].map((a) => a.breed_group);

    //     if (!dogName) {
    //       return 'Oh there is no information, enjoy the image';
    //     } else {
    //       setDogImageUrl(newUrl);
    //       setName(dogName);
    //       setLifeSpan(life);
    //       setChar(temperament);
    //       setBreedGroup(dogBreedGroup);
    //     }
    //   })
    //   .then(() => {
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 250);
    //   })
    //   .then((error) => {
    //     return error;
    //   });
  };

  function changeImage(e) {
    e.preventDefault();
    fetchData();
  }

  // -------------------  Save favourite -----------------------

  function goSum() {
    const favorite = Cookies.getJSON('sum') || [];
    favorite.push(sumDogs);
    Cookies.set('sum', favorite);
    alert("I'm saved as your favourite, take me home");
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
        <div>
          {loading ? (
            <img src={loadingUrl} alt="preloadingUrl" />
          ) : (
            <img alt="dog-fetched-images" src={dog.url} />
          )}

          <div>
            <Button
              onClick={() => goSum()}
              variant="contained"
              color="secondary"
            >
              Like
              <span role="img" aria-label="emoji">
                ♥️
              </span>
            </Button>
            <br />
            <br />
            <Button
              onClick={changeImage}
              variant="contained"
              disabled={loading}
            >
              To Next
            </Button>
            <br />
            <br />
            <Link href="/sum">
              <a>
                <Button variant="contained" color="primary">
                  to favourite
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div>
          {sumDogs.name !== undefined ? (
            <div className="information">
              <p>{sumDogs.name}</p>
              <h4>
                Breed-group:
                <span role="img" aria-label="emoji">
                  🎋
                </span>{' '}
                {sumDogs.breedGroup}
              </h4>
              <h4>
                Life:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.lifeSpan}
              </h4>
              <h4>
                Temperament:
                <span role="img" aria-label="emoji">
                  🎲
                </span>{' '}
                {sumDogs.char}
              </h4>
            </div>
          ) : (
            <p>Relex ! Visit Next !</p>
          )}
        </div>
      </div>
      <hr />
      <div className="stars">
        <img src="/about-us-dog.jpg" alt="cute-dogs" />
        <br />
        <br />
        <Link href="/star">
          <a>
            <div className="star-view">
              <Button variant="contained" color="primary">
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
          .container {
            margin: 0 auto;
            padding: 0.5em;
          }
          .dogList {
            margin: 2em;
            display: flex;
            justify-content: space_around;
            align-items: center;
          }

          img {
            width: 10em;
            height: 10em;
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

          a {
            text-decoration: none;
          }

          span {
            margin-left: 0.5em;
          }
          .stars {
            margin: 0.5em auto;
            text-align: center;
          }

          @media (max-width: 450px) {
            img {
              width: 5em;
              height: 5em;
            }
            .dogList {
              display: block;
            }
            .buttons {
              display: block;
            }

            .star-view {
              display: relative;
            }
          }
        `}
      </style>
    </div>
  );
}
