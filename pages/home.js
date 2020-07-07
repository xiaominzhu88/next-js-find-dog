import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// preloading with SWR
// import useSWR from 'swr';
// const fetcher = (url, apiKey) =>
//   fetch(url, {
//     method: 'GET',
//     dataType: 'JSON',
//     headers: { 'X-Api-Key': `${apiKey}` },
//   }).then((r) => r.json());

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
  },
];

export default function Home() {
  const apiKey = process.env.apiKey;

  // below is used for Snackbar effect
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // using SWR preloading
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
    weight_imperial: dog.breeds[0]?.weight.imperial,
    weight_metric: dog.breeds[0]?.weight.metric,
    height_imperial: dog.breeds[0]?.height.imperial,
    height_metric: dog.breeds[0]?.height.metric,
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
      })
      .catch((err) => err);
  }, [apiKey, dogId]);

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  useEffect(() => {
    preloadImage(dogs[dogId + 1].url);
  }, [dogId, dog]);

  // below is using state with initial content when the page first started
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

    // below is using direct url fetch, update state every button click, it works but is slowly than useEffect with defined a dog Array
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
    //alert("I'm saved as your favourite, take me home");
    //window.location.reload();
    handleClick();
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
        </div>
        <div>
          {sumDogs.name !== undefined ? (
            <div className="information">
              <h2>{sumDogs.name}</h2>
              <p>
                Breed-group:
                <span role="img" aria-label="emoji">
                  🎋
                </span>{' '}
                {sumDogs.breedGroup}
              </p>
              <p>
                Lifespan:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.lifeSpan}
              </p>
              <p>
                Weight-imperial:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.weight_imperial}
              </p>
              <p>
                Weight-metric:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.weight_metric}
              </p>
              <p>
                Height-imperial:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.height_imperial}
              </p>
              <p>
                Height-imperial:
                <span role="img" aria-label="emoji">
                  🔅
                </span>{' '}
                {sumDogs.height_imperial}
              </p>

              <p>
                Temperament:
                <span role="img" aria-label="emoji">
                  🎲
                </span>{' '}
                {sumDogs.char}
              </p>
            </div>
          ) : (
            <p>Relax ! Visit Next !</p>
          )}
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => goSum()} className="likeButton" type="button">
          <span className="buttonSpan" role="img" aria-label="emoji">
            🤍
          </span>
        </button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            backgroundColor: 'rgb(240, 93, 130)',
          }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message=" I'm saved as your favourite, take me home 💌"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                YES
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />

        <button className="changeButton" type="button" onClick={changeImage}>
          <span className="MuiButton-label" role="img" aria-label="emoji">
            🐶
          </span>
        </button>

        <Link href="/sum">
          <a>
            <button className="favoButton" type="button">
              <span className="buttonSpan" role="img" aria-label="emoji">
                ⭐️
              </span>
            </button>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');

          * {
            box-sizing: border-box;
          }

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
          h2 {
            letter-spacing: 0.2em;
            line-height: 1em;
            font-family: 'Fira Mono', monospace;
            font-size: 1.5em;
            color: #e078b3;
          }
          p {
            line-height: 2em;
            font-family: 'Fira Mono', monospace;
            margin-top: 10px;
            color: #9d9c9f;
          }

          a {
            text-decoration: none;
          }

          button {
            border: none;
            cursor: pointer;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.33);
          }

          button:hover .MuiButton-label {
            font-size: 5em !important;
            transition: 0.5s;
          }
          button:focus {
            outline: 0 !important;
          }
          button:active {
            transition: transformY(4px);
            background-color: rgb(235, 208, 121);
          }

          .button-container {
            text-align: center;
          }

          .likeButton {
            background-color: rgba(247, 138, 103, 1);
            padding-right: 50px;
            margin-right: -25px;
            border-radius: 10px;
          }
          buttonSpan {
            font-size: 2em;
          }

          .changeButton {
            border-radius: 50%;
            z-index: 2;
            position: relative;
            width: 100px;
            height: 100px;
          }
          .favoButton {
            background-color: rgb(225, 52, 174);
            padding-left: 100px;
            margin-left: -50px;
            border-radius: 10px;
          }

          .button-container span {
            margin: 0;
            font-weight: 800;
            color: #777777;
            font-size: 4em;
          }

          @media (max-width: 450px) {
            img {
              width: 5em;
              height: 5em;
            }
            .dogList {
              display: block;
            }

            .button-container {
              margin-bottom: 2em;
            }

            .likeButton {
              padding-right: 25px;
              margin-right: -25px;
            }
            buttonSpan {
              font-size: 0.5em;
            }

            .changeButton {
              position: relative;
              width: 90px;
              height: 90px;
            }
            .favoButton {
              padding-left: 50px;
              margin-left: -50px;
            }

            .button-container span {
              font-weight: 500;
              font-size: 4em;
            }
          }
        `}
      </style>
    </div>
  );
}
