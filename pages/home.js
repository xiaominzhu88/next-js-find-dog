import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    fetch('https://api.thedogapi.com/v1/images/search', {
      method: 'GET',
      dataType: 'JSON',
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((res) => res.json())

      .then((result) => {
        setLoading(true);

        const newUrl = result.map((a) => a.url);
        const dogBreeds = result.map((dog) => dog.breeds);
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
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 250);
      })
      .then((error) => {
        return error;
      });
  };

  function changeImage(e) {
    e.preventDefault();
    fetchData();
  }

  // -------------------  Preloading image ------------------------

  const preloadingUrl = './loadingDog.png';

  // -------------------  Save favourite -----------------------

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
            <img src={preloadingUrl} alt="preloadingUrl" />
          ) : (
            <img alt="dog-fetched-images" src={dogImageUrl} />
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
            <Button onClick={changeImage} variant="contained">
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

        <div className={`current pic `}>
          <div className="3buttons">
            <img src="/about-us-dog.jpg" alt="cute-dogs" />
            <div className="stars"></div>

            <Link href="/star">
              <a>
                <div className="star-view">
                  <Button variant="contained">
                    Visit Our Stars
                    <span role="img" aria-label="emoji">
                      🌟
                    </span>
                  </Button>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div>
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
          <p>Relex ! Visit Next !</p>
        )}
      </div>

      <Footer />
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            padding: 0.5em;
          }
          .dogList {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 2em auto;
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

          a {
            text-decoration: none;
          }
          .dog-content {
            margin: 3em auto;
          }
          .stars {
            height: 5.5em;
          }
          span {
            margin-left: 0.5em;
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
