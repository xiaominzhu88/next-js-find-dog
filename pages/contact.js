import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';
//import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Contact({ adopt }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // below using snackbar
  const [open, setOpen] = useState(false);

  function openSnackBar() {
    setOpen(true);
  }

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // input validation
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  const validate = () => {
    if (!email.includes('@')) {
      setEmailError('Invalid Email');
      return false;
    } else {
      setEmailError(null);
    }

    if (!name) {
      setNameError('Name can not be blank');
      return false;
    } else {
      setNameError(null);
    }

    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate();
    console.log('VALIDATION: ', isValid);

    if (isValid === 'false') {
      setNameError(nameError);
      setEmailError(emailError);
    } else {
      console.log('INPUT-name: ', name);
      console.log('INPUT-email: ', email);
      Cookies.remove('sum');
      Cookies.remove('adopt');

      openSnackBar();
    }
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

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={name}
            type="text"
            onChange={handleChangeName}
          />
          {nameError ? <div style={{ color: 'red' }}>{nameError}</div> : null}
          <br />
          <br />
          <input
            placeholder="Email"
            name="email"
            value={email}
            type="text"
            onChange={handleChangeEmail}
          />
          {emailError ? <div style={{ color: 'red' }}>{emailError}</div> : null}{' '}
          <br />
          <br />
          <button type="submit">Submit</button>{' '}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Thanks for your Email "
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  <span role="img" aria-label="emoji">
                    🍭
                  </span>
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="secondary"
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
        input {
          width: 12em;
          height: 2em;
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
