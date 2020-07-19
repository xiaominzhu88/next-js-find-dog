import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import nextCookies from 'next-cookies';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
//import Cookies from 'js-cookie';

export default function SearchDogs({ favoDogList }) {
  const [color, setColor] = useState('secondary');
  const [isClicked, setIsClicked] = useState(false);
  // save cookie with favo names for contact page
  // function save() {
  //   const eachName = favoDogList.map((el) => el.favoname);
  //   console.log('EACHNAME....', eachName);
  //   setFavoName(eachName);
  //   const favo = Cookies.getJSON('sum') || [];
  //   favo.push(favoName);
  //   Cookies.set('adopt', favo);
  // }

  const favoIds = favoDogList.map((each) => each.dogid);
  console.log(favoIds);

  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="favorite-sum">
        {favoDogList.length !== 0 ? (
          <ul>
            {favoDogList.map((eachFavorite, i) => {
              return (
                <div className="favorite-list" key={i}>
                  <li>
                    <img src={eachFavorite.url} alt="favorite-dog" />
                  </li>
                  <li>
                    <h3> {eachFavorite.favoname}</h3>
                  </li>
                  {eachFavorite.lifespan ? (
                    <li>
                      <b>Lifespan:</b> {eachFavorite.lifespan}
                    </li>
                  ) : (
                    ''
                  )}
                  {eachFavorite.breedgroup ? (
                    <li>
                      <b>Breed Group: </b>
                      {eachFavorite.breedgroup}
                    </li>
                  ) : (
                    ''
                  )}
                  {eachFavorite.temperament ? (
                    <li>
                      {' '}
                      <b>Temperament: </b>
                      {eachFavorite.temperament}
                    </li>
                  ) : (
                    ''
                  )}
                  {eachFavorite.dogid ? (
                    <li>
                      {' '}
                      <b>Id: </b>
                      {eachFavorite.dogid}
                    </li>
                  ) : (
                    ''
                  )}

                  <li>
                    <a
                      href={`mailto:shelter@vienna.com?subject=request to see ${eachFavorite.favoname}&body=Hey, I want to connect you for the dog ${eachFavorite.favoname} with id: ${eachFavorite.dogid}. Thank you`}
                    >
                      {/* <Link href="/contact">
                      <a> */}

                      <div className="adopt-button">
                        <Button
                          variant="contained"
                          color={isClicked ? 'inherit' : color}
                          onClick={(e) => {
                            if (typeof window === 'undefined') {
                              throw new Error(
                                'Cannot set localStorage (window is undefined)',
                              );
                            }

                            window.localStorage.setItem(
                              'contactedDogs',
                              JSON.stringify({ ...favoIds }),
                            );

                            const contactedDogs = JSON.parse(
                              window.localStorage.getItem('contactedDogs') ||
                                [],
                            );
                            console.log('contactedDogs: ', contactedDogs);
                          }}
                        >
                          Adopt Me{' '}
                          <span role="img" aria-label="emoji">
                            💌
                          </span>
                        </Button>
                      </div>
                      {/* </a>
                    </Link> */}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.2em' }}>
              You don't have any favourite now
            </h2>
            <Link href="/home">
              <a>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginBottom: '1em',
                  }}
                >
                  To Home
                </Button>
              </a>
            </Link>
          </div>
        )}
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
            width: 8em;
            height: 8em;
            border-radius: 50%;
          }
          ul  {
            margin-top: 5em;
          }

          li {
            list-style: none;
            margin-left: 2em;
            font-size: 0.9em;
            font-family: 'Fira Mono', monospace;
            color: #9d9c9f;
          }

          .favorite-list {
            line-height: 1.5em;
          }
          .adopt-button {
            margin: 1.5em auto;
          }

          span {
            margin-left: 1em;
          }
          a {
            text-decoration: none;
          }

          @media (max-width: 450px) {
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
              text-align: center;
            }
            .adopt-button {
              margin: 1em auto;
            }
          }
        `}
      </style>
    </>
  );
}
//get 'saved' dogs as cookies with name 'sum'
// export function getServerSideProps(context) {
//   const { sum } = nextCookies(context);
//   //console.log(sum);
//   return {
//     props: {
//       sum: sum === undefined ? [] : sum,
//     },
//   };
// }

// get 'saved' dogs from API / DB
export async function getServerSideProps(context) {
  const { getFavoDogs } = await import('../db');
  const favoDogList = await getFavoDogs();

  // returns Array with saved favourite
  console.log('FAVOLIST: ', favoDogList);

  return {
    props: {
      favoDogList: favoDogList === undefined ? [] : favoDogList,
    },
  };
}
