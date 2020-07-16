import React from 'react';
import Head from 'next/head';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
import Link from 'next/link';

function Dog(props) {
  if (!props.dogs) return <div>Dogs not found!</div>;

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/* <Header /> */}

      <main>
        <h1>
          <span role="img" aria-label="star">
            🌟
          </span>
          {props.dogs.id}
          <span role="img" aria-label="star">
            🌟
          </span>
        </h1>
        <h2>{props.dogs.h2}</h2>
        <img src={props.dogs.src} alt="dogs" />
        <p>{props.dogs.p}</p>
      </main>
      <div className="buttons">
        <Link href="/star">
          <a>
            <button className="toStarButton">Our Stars</button>
          </a>
        </Link>
        <Link href="/home">
          <a>
            <button className="toHomeButton">To Home</button>
          </a>
        </Link>
      </div>
      {/* <Footer /> */}

      <style jsx>{`
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
          font-family: 'Fira Mono', monospace;
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
          max-width: 450px;
          font-family: 'Fira Mono', monospace;
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
        @media (max-width: 450px) {
          p {
            font-size: 12px;
            padding: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}
export default Dog;

export async function getServerSideProps(context) {
  const { getDogsById } = await import('../../db.js');

  const dogs = await getDogsById(context.params.id);

  console.log('dog id', context.params); // Log out: dog id {id: '1'}...

  if (dogs === undefined) {
    return { props: {} };
  }
  return {
    props: {
      dogs: dogs[0],
    },
  };
}
