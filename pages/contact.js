import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Router from 'next/router';

export default function Contact({ adopt }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function sendMail() {
    Cookies.remove('sum');
    Cookies.remove('adopt');
    handleClick();
    setTimeout(() => {
      Router.replace('/home');
    }, 3000);
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
          <Button variant="contained" onClick={() => sendMail()}>
            Send
          </Button>{' '}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
              backgroundColor: 'rgb(240, 93, 130)',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Thank you for your Email 🍭"
            action={
              <React.Fragment>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleClose}
                ></Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </form>

        <div className="toAdopt">
          {adopt.length === 0 ? (
            <h3>
              <span role="img" aria-label="emoji">
                🐶
              </span>{' '}
              No favourite to adopt{' '}
            </h3>
          ) : (
            <ul>
              <h3>
                <span role="img" aria-label="emoji">
                  🐶
                </span>{' '}
                We are your favourite
              </h3>
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
              color="secondary"
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
          font-family: Gill sans;
          color: #065c86;
        }
        li {
          font-family: Gill sans;
          color: rgba(224, 39, 174, 1);
        }
      `}</style>
    </div>
  );
}
export function getServerSideProps(context) {
  const { adopt } = nextCookies(context);

  return {
    props: {
      adopt: adopt === undefined ? [] : adopt,
    },
  };
}
