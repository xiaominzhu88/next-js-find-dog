import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
//import nextCookies from 'next-cookies';
//import Cookies from 'js-cookie';
import PopUp from '../components/PopUp';
import Router from 'next/router';

export default function SearchDogs({ favoDogList }) {
  const [warning, setWarning] = useState('');
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('');
  const [adoptedDogs, setAdoptedDogs] = useState([]);

  // save cookie with favo names for contact page
  // function save() {
  //   const eachName = favoDogList.map((el) => el.favoname);
  //   console.log('EACHNAME....', eachName);
  //   setFavoName(eachName);
  //   const favo = Cookies.getJSON('sum') || [];
  //   favo.push(favoName);
  //   Cookies.set('adopt', favo);
  // }

  const togglePop = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  const removeAll = (e) => {
    e.preventDefault();

    fetch('/api/deleteFavos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok !== true) {
          setStatus('DELETE ERROR!!!');
        }
        return res.json();
      })
      .then((json) => {
        setStatus('DOGS DELETED!!!');
      })
      .catch(() => setStatus("NOOOP, doesn't work!!!"));
    console.log('STATUS: ', status);
    window.localStorage.removeItem('contactedDogs');
    setTimeout(() => {
      Router.replace('/favourite');
    }, 1000);
  };

  useEffect(() => {
    setAdoptedDogs(
      JSON.parse(window.localStorage.getItem('contactedDogs')) || [],
    );
  }, []);

  return (
    <>
      <Head>
        <title>favourite</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="saved favourite dogs page" content="favourite" />
      </Head>
      <Header />

      <div className="favorite-sum">
        {favoDogList.length !== 0 ? (
          <div>
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
                      <div className="adopt-button">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                          href={
                            adoptedDogs.includes(eachFavorite.dogid)
                              ? '#'
                              : `mailto:shelter@vienna.com?subject=request to see ${eachFavorite.favoname}&body=Hey, %0D%0A%0D%0AI%20 want%20 to%20 connect%20 you%20 for %0D%0A%0D%0A🐶${eachFavorite.favoname} %0D%0A%0D%0Awith %0D%0A%0D%0A🎲id: ${eachFavorite.dogid}. %0D%0A%0D%0AThank%20you!%0D%0A%0D%0AAll%20the%20Best`
                          }
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            key={i}
                            disabled={adoptedDogs.includes(eachFavorite.dogid)}
                            //choose dogs and save ids to localStorage, click on adopt button -- open Email form
                            onClick={() => {
                              const contactedDogs =
                                JSON.parse(
                                  window.localStorage.getItem('contactedDogs'),
                                ) || [];

                              if (
                                contactedDogs.indexOf(eachFavorite.dogid) === -1
                              ) {
                                window.localStorage.setItem(
                                  'contactedDogs',
                                  JSON.stringify([
                                    ...contactedDogs,
                                    eachFavorite.dogid,
                                  ]),
                                );
                              } else {
                                setWarning(
                                  "I'm Unique, You can not adopt me more than 1 time 💥",
                                );
                                setAdoptedDogs(contactedDogs);
                                togglePop();
                              }
                            }}
                          >
                            Adopt Me{' '}
                            <span role="img" aria-label="emoji">
                              💌
                            </span>
                          </Button>
                        </a>

                        <div className="popup">
                          {visible ? (
                            <PopUp
                              toggle={togglePop}
                              warning={warning}
                              close={close}
                            />
                          ) : null}
                        </div>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
            <div className="removeButton" style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  color: '#fff',
                  marginBottom: '1.5em',
                  marginTop: '1.5em',
                }}
                onClick={removeAll}
              >
                Remove All
                <span role="img" aria-label="emoji">
                  🍥
                </span>
              </Button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.2em' }}>
              You don't have any favourite now
            </h2>

            <Button
              variant="contained"
              color="primary"
              style={{
                marginBottom: '1em',
              }}
              onClick={() => Router.push('/fetch')}
            >
              To Fetch
            </Button>
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

          p,
          h4 {
            text-align: center;
            font-family: 'Fira Mono', monospace;
            color: rgb(221, 23, 90);
            background-color: #dddadb;
            width: 50%;
            margin: 2em auto;
            border-radius: 10px;
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
