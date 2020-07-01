import React from 'react';
import Head from 'next/head';
//import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

function FetchedDog({ fetchedDogs }) {
  if (!fetchedDogs) {
    return (
      <div className="error-page">
        <h1>Ops! This dog is not at home!</h1>
        <Link href="/breeds">
          <a>
            <Button variant="contained" color="primary">
              To Search Page
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Button variant="contained" color="secondary">
              To Homepage
            </Button>
          </a>
        </Link>
      </div>
    );
  }

  //console.log('props:', props.fetchedDogs);
  //console.log('name:', props.fetchedDogs.name);
  //console.log(fetchedDogs.url);

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main>
        <img
          src={fetchedDogs.url === null ? '/no-dog.jpg' : fetchedDogs.url}
          alt={fetchedDogs.name}
        />
        <p>
          {fetchedDogs.url === null
            ? `Oh, we don't have image for your search 
            -- ${fetchedDogs.name}
             `
            : ''}
        </p>

        <h1>
          <span role="img" aria-label="star">
            🌟
          </span>

          {fetchedDogs.name
            ? fetchedDogs.name
            : 'There is no information about this'}
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
        <h3>
          Lifespan:{' '}
          {fetchedDogs.life_span
            ? fetchedDogs.life_span
            : 'There is no information about this'}
        </h3>
        <p>
          Bred for:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.bred_for
            : 'There is no information about this'}
        </p>
        <p>
          Weight-Imperial:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.weight_imperial
            : 'There is no information about this'}{' '}
        </p>
        <p>
          Weight-Metirc:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.weight_metric
            : 'There is no information about this'}{' '}
        </p>
        <p>
          Height-Imperial:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.height_imperial
            : 'There is no information about this'}{' '}
        </p>
        <p>
          Height-Metric:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.height_metric
            : 'There is no information about this'}{' '}
        </p>
        <p>
          Origin:{' '}
          {fetchedDogs.origin
            ? fetchedDogs.origin
            : 'There is no information about this'}
        </p>

        <p>
          Temperament:{' '}
          {fetchedDogs.temperament
            ? fetchedDogs.temperament
            : 'There is no information about this'}
        </p>
      </main>

      <div className="buttons">
        <Link href="/breeds">
          <a>
            <Button variant="contained" color="primary">
              To Search
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Button variant="contained" color="secondary">
              To Home
            </Button>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');

        main {
          margin: 3em auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
          text-shadow: 0px 1px 2px orange;
        }

        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-shadow: 0px 3px 3px orange;
          color: darkcyan;
        }
        p {
          font-size: 15px;
          text-shadow: 0px 1px 2px orange;
          color: darkcyan;
          text-align: left;
          font-weight: 700;
          margin: 1em auto;
          line-height: 1.6em;
          font-size: 0.8em;
          font-family: 'Bitter', serif;
          max-width: 450px;
          text-align: center;
        }
        a {
          text-decoration: none;
        }
        img {
          width: 10em;
          height: 10em;
          margin: 0 auto;
          border-radius: 40%;
        }
        .buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 2em auto;
        }
        .error-page {
          margin: 1em auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export default FetchedDog;

export async function getServerSideProps(context) {
  const { getFetchedDogsById } = await import('../../db.js');

  const fetchedDogs = await getFetchedDogsById(context.params.id);

  const pMap = require('p-map');
  const got = require('got');

  const urls = fetchedDogs.map((el) => el.url);

  //------------------ 1 ------------------------------------
  console.log('URL: ', urls);
  //------------------- 2 -----------------------------------
  console.log('result: ', fetchedDogs);

  (async () => {
    const mapper = async (url) => {
      const { requestUrl } = await got.head(url);
      return requestUrl;
    };

    const result = await pMap(urls, mapper, { concurrency: 2 });

    //-------------------- 3 -------------------------------
    console.log('resultSSSS: ', result);
  })();

  const fetchedId = fetchedDogs.map((item) => item.id);

  if (fetchedDogs.length === 0 || fetchedId > 172) {
    return { props: {} };
  }
  return {
    props: {
      fetchedDogs: fetchedDogs[0],
    },
  };
}
