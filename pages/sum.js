import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
//import nextCookies from 'next-cookies';
//import Cookies from 'js-cookie';
import PopUp from '../components/PopUp';

export default function SearchDogs({ favoDogList }) {
  const [msg, setMsg] = useState('');
  const [warning, setWarning] = useState('');
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('');

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
  };

  return (
    <>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <div className="favorite-sum">
        {/* PopUp component to show information */}

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
                      {/* <a
                      href={`mailto:shelter@vienna.com?subject=request to see ${eachFavorite.favoname}&body=Hey, %0D%0A%0D%0AI want to connect you for %0D%0A%0D%0A🐶${eachFavorite.favoname} %0D%0A%0D%0Awith %0D%0A%0D%0A🎲id: ${eachFavorite.dogid}. %0D%0A%0D%0AThank you!`}
                    > */}
                      {/* <Link href="/contact">
                      <a> */}

                      <div className="adopt-button">
                        <Button
                          variant="contained"
                          color="secondary"
                          key={i}
                          //choose dogs and save ids to localStorage, click on adopt button directly open Email-send-contact window
                          onClick={() => {
                            if (typeof window === 'undefined') {
                              throw new Error(
                                'Cannot set localStorage (window is undefined)',
                              );
                            }

                            const contactedDogs =
                              JSON.parse(
                                window.localStorage.getItem('contactedDogs'),
                                // window.localStorage.getItem(
                                //   JSON.stringify(eachFavorite.favoname),
                                // ),
                              ) || [];

                            // no dubble dog is allowed to storage
                            contactedDogs.indexOf(eachFavorite.dogid) === -1
                              ? contactedDogs.push(eachFavorite.dogid)
                              : setWarning(
                                  'You can not adopt me more than 1 time 💥',
                                  setTimeout(() => {
                                    setWarning('');
                                  }, 5000),
                                );

                            window.localStorage.setItem(
                              'contactedDogs',
                              //JSON.stringify(eachFavorite.favoname),
                              JSON.stringify(contactedDogs),
                            );

                            console.log('contactedDogId: ', contactedDogs);

                            setMsg(`You choosed 🐶 Id(s): ${contactedDogs}`);

                            togglePop();
                          }}
                        >
                          Adopt Me{' '}
                          <span role="img" aria-label="emoji">
                            💌
                          </span>
                        </Button>
                        <a
                          href={`mailto:shelter@vienna.com?subject=request to see ${eachFavorite.favoname}&body=Hey, %0D%0A%0D%0AI want to connect you for %0D%0A%0D%0A🐶${eachFavorite.favoname} %0D%0A%0D%0Awith %0D%0A%0D%0A🎲id: ${eachFavorite.dogid}. %0D%0A%0D%0AThank you!`}
                        >
                          <Button
                            variant="contained"
                            color="inherit"
                            style={{ color: 'red', marginLeft: '1em' }}
                          >
                            Send Email
                            <span role="img" aria-label="emoji">
                              ❣️
                            </span>
                          </Button>
                        </a>
                        <div className="popup">
                          {visible ? (
                            <PopUp
                              toggle={togglePop}
                              msg={msg}
                              warning={warning}
                              close={close}
                            />
                          ) : null}
                        </div>
                      </div>
                      {/* </a>
                    </Link> */}
                    </li>
                  </div>
                );
              })}
            </ul>
            <div className="removeButton" style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="secondary"
                style={{ color: '#fff' }}
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
