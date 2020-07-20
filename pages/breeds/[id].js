import React from 'react';
import Head from 'next/head';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Error from 'next/error';

function FetchedDog({ fetchedDogs, statusCode }) {
  if (!fetchedDogs) {
    return (
      <div
        className="error-page"
        style={{ margin: '1em auto', textAlign: 'center', padding: '1em' }}
      >
        <h1>Ops! This dog is not at home!</h1>
        <Link href="/search">
          <a style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              To Search Page
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a style={{ textDecoration: 'none' }}>
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

  if (statusCode === 404) {
    // This line will show the default Error Page
    return <Error statusCode={statusCode} />;
  }
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
          {fetchedDogs.name
            ? fetchedDogs.name
            : 'There is no information about me'}
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
        <h3>
          Lifespan:{' '}
          {fetchedDogs.life_span
            ? fetchedDogs.life_span
            : 'There is no information about me'}
        </h3>
        <p>
          Bred for:{' '}
          {fetchedDogs.bred_for
            ? fetchedDogs.bred_for
            : 'There is no information about me'}
        </p>
        <p>
          Weight-Imperial:{' '}
          {fetchedDogs.weight_imperial
            ? fetchedDogs.weight_imperial
            : 'There is no information about me'}{' '}
        </p>
        <p>
          Weight-Metirc:{' '}
          {fetchedDogs.weight_metric
            ? fetchedDogs.weight_metric
            : 'There is no information about me'}{' '}
        </p>
        <p>
          Height-Imperial:{' '}
          {fetchedDogs.height_imperial
            ? fetchedDogs.height_imperial
            : 'There is no information about me'}{' '}
        </p>
        <p>
          Height-Metric:{' '}
          {fetchedDogs.height_metric
            ? fetchedDogs.height_metric
            : 'There is no information about me'}{' '}
        </p>
        <p>
          Origin:{' '}
          {fetchedDogs.origin
            ? fetchedDogs.origin
            : 'There is no information about me'}
        </p>

        <p>
          Temperament:{' '}
          {fetchedDogs.temperament
            ? fetchedDogs.temperament
            : 'There is no information about me'}
        </p>
      </main>

      <div className="buttons">
        <Link href="/search">
          <a>
            <Button variant="contained" color="primary">
              To Search
            </Button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <Button variant="contained" color="secondary">
              To home
            </Button>
          </a>
        </Link>
      </div>

      {/* <Footer /> */}
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
          text-shadow: 0px 3px 3px #6e8309;
          color: #3046bf;
        }
        p {
          font-size: 15px;
          text-shadow: 0px 1px 2px #ffc107;
          color: #3f51b5;
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
          text-decoration: none !important;
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
          text-decoration: none !important;
        }
        .error-page {
          margin: 1em auto;
          text-align: center;
        }
        @media (max-width: 450px) {
          h1 {
            font-size: 1em;
          }
          h3 {
            font-size: 0.8em;
            color: ;
          }
          p {
            font-size: 0.6em;
          }
        }
      `}</style>
    </div>
  );
}
export default FetchedDog;

export async function getServerSideProps(context) {
  const { getFetchedDogsById } = await import('../../db.js');

  const fetchedDogs = await getFetchedDogsById(context.params.id);

  const fetchedId = fetchedDogs.map((item) => item.id);

  if (fetchedDogs.length === 0 || fetchedId > 172) {
    return { props: {} };
  }
  if (!fetchedDogs) {
    context.res.statusCode = 404;
  }
  return {
    props: {
      fetchedDogs: fetchedDogs[0],
      statusCode: fetchedDogs ? 200 : 404,
    },
  };
}
