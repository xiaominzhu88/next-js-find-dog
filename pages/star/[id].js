import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

function Dog(props) {
  if (!props.dogs) return <div>Dogs not found!</div>;

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

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
            <Button
              variant="contained"
              color="inherit"
              style={{ color: 'red' }}
            >
              To Stars{' '}
              <span
                role="img"
                aria-label="emoji"
                style={{ marginLeft: '0.5em' }}
              >
                🌟
              </span>
            </Button>
          </a>
        </Link>
        <Link href="/fetch">
          <a>
            <Button variant="contained" color="secondary">
              To Fetch{' '}
              <span
                role="img"
                aria-label="emoji"
                style={{ marginLeft: '0.5em' }}
              >
                ➡️
              </span>
            </Button>
          </a>
        </Link>
      </div>

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
          text-shadow: 0px 1px 2px #ec6392;
          color: #9e9e9e;
        }

        h2 {
          font-family: 'Fira Mono', monospace;
          text-shadow: 0px 1px 2px #ec6392;
          color: #9e9e9e;
        }
        p {
          font-size: 15px;
          color: #9e9e9e;
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
          margin: 2em auto;
        }
        a {
          text-decoration: none;
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
