import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

function FetchedDog(props) {
  if (!props.fetchedDogs) return <div>Dogs not found!</div>;

  console.log(props.fetchedDogs);
  console.log(props.fetchedDogs.name);

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />

      <main>
        <h1>
          <span role="img" aria-label="star">
            🌟
          </span>
          {props.fetchedDogs.name}
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
        <h2>Life: {props.fetchedDogs.life_span}</h2>
        <p>Bred for: {props.fetchedDogs.bred_for}</p>
        <p>Origin: {props.fetchedDogs.origin}</p>
        <p>Temperament: {props.fetchedDogs.temperament}</p>
      </main>
      <div className="buttons">
        <Link href="/search">
          <a>
            <button className="toStarButton">To Search</button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <button className="toHomeButton">To Home</button>
          </a>
        </Link>
      </div>

      <Footer />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bitter:ital@1&display=swap');

        main {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-align: center;
          padding: 5px;
          text-shadow: 0px 3px 3px orange;
        }

        h3 {
          font-family: 'Lucida Console', Monaco, monospace;
          text-shadow: 0px 3px 3px orange;
        }
        p {
          font-size: 15px;
          color: darkcyan;
          text-align: left;
          font-weight: 700;
          margin-top: 2em;
          line-height: 1.6em;
          font-size: 0.8em;
          font-family: 'Bitter', serif;
          max-width: 450px;
        }

        img {
          width: 40%;
          height: 50%;
          margin: 0 auto;
        }
        .buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        button {
          margin: 1em auto;
          width: 6em;
          height: 3em;
          border: none;
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 6px 8px 10px lightpink;
          background-color: rgb(217, 236, 230);
          font-family: cursive;
          font-size: 1em;
          font-weight: bold;
          outline: none;
          transition: background-color 1s ease-in;
        }
        button:hover {
          background-color: yellow;
          color: hotpink;
          font-weight: 700;
        }
        button:active {
          transition: transformY(4px);
          background-color: rgb(235, 208, 121);
        }
      `}</style>
    </div>
  );
}
export default FetchedDog;

export async function getServerSideProps(context) {
  const { getFetchedDogsById } = await import('../../db.js');

  const fetchedDogs = await getFetchedDogsById(context.params.id);

  console.log(fetchedDogs);

  if (fetchedDogs === undefined) {
    return { props: {} };
  }
  return {
    props: {
      fetchedDogs: fetchedDogs[0],
    },
  };
}
