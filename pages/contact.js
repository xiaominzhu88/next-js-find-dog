import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';

export default function Contact({ adopt }) {
  function sendMail() {
    Cookies.remove('sum');
    Cookies.remove('adopt');
  }
  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <div className="contact">
        <h1>contact</h1>
        <form>
          <TextField
            id="outlined-search"
            label="Name"
            type="search"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-search"
            label="Email"
            type="search"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={sendMail}
            style={{ margin: '1em auto' }}
          >
            Send
          </Button>{' '}
        </form>

        <div className="toAdopt">
          <h3>
            <span role="img" aria-label="emoji">
              🐶
            </span>{' '}
            We are your favourite
          </h3>
          {!adopt ? (
            ''
          ) : (
            <ul>
              {adopt.map((el, i) => (
                <li key={i}> {el.name}</li>
              ))}
            </ul>
          )}
        </div>

        <Link href="/sum ">
          <a>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '1em auto' }}
            >
              To Favourite Page
            </Button>
          </a>
        </Link>
      </div>
      <Footer />
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .contact {
          margin: 1em auto;
          text-align: center;
        }
        li {
          list-style: none;
          line-height: 1.5em;
        }
        .toAdopt {
          dispaly: flex;
        }
        h3,
        h1 {
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          color: #065c86;
        }
        li {
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          color: rgb(35, 174, 237);
        }
      `}</style>
    </div>
  );
}
export function getServerSideProps(context) {
  const { adopt } = nextCookies(context);
  //console.log(sum);
  return {
    props: {
      adopt: adopt === undefined ? [] : adopt,
    },
  };
}
