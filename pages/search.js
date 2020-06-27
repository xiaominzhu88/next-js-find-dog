import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Search1({ fetchedDogNames }) {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [info, setInfo] = useState('');

  // -------------  update input value  ------------------------
  // convert input value to lowercase

  function showValue(e) {
    setInput(e.target.value.toLowercase());
  }

  // get list which contains name and id from database for each dog, an Array
  const oldList = fetchedDogNames.map((el) => el.id + '  🐶 ' + el.name);

  // from the list above, filter a new list out, which contains the user input
  // and convert it to a new list as 'newList-filtered', it will be showed in
  // 'return' below

  function showDataValue(e) {
    e.preventDefault();
    if (input !== '') {
      let newList = [];
      newList = oldList.filter((val) => val.includes(input));
      setFiltered(newList);
    } else {
      setInfo('Ops,search for a breed?');
    }
  }

  return (
    <div>
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* use matrial-ui input field */}
      <div className="searchBar">
        <form noValidate autoComplete="off">
          <TextField
            id="search"
            label="Search Breed"
            color="secondary"
            value={input}
            onChange={showValue}
          />
        </form>
        <div className="searchButton">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={showDataValue}
          >
            {' '}
            <span role="img" aria-label="emoji">
              🔎
            </span>
          </Button>
        </div>
      </div>
      <div className="table">
        <h3>
          {/* get the sum from the data result which is as filtered length here */}
          <span className="span">{input !== '' ? filtered.length : '0'}</span>{' '}
          Breeds for you{' '}
          <span role="img" aria-label="emoji">
            💝
          </span>
        </h3>
        {input === '' ? (
          info
        ) : (
          // filter from the data result and create each of them as a link
          <ul>
            {filtered.map((name, i) => {
              // use REGEX to match the exact id from each dog and use it as the path '/search/[id]' which below on line 91
              const eachId = name.match(/\d/g).join('');
              //console.log('eachId: ', eachId);
              //console.log('name: ', name);

              return (
                <li key={i}>
                  {/* Use ${eachId} dynamically attach each dog which has the same id, which matches each id from each name use Regex */}
                  <Link href="/search/[id]" as={`/search/${eachId}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Footer />

      <style jsx>{`
        .searchBar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2em auto;
        }
        input {
          width: 10em;
          height: 2em;
          background-color: rgb(217, 236, 230);
          border: none;
          border-radius: 5px;
        }
        .searchButton {
          margin-left: 2em;
        }
        .table,
        ul,
        h3 {
          text-align: center;
          list-style: none;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          line-height: 2em;
          margin: 1em auto;
          background-color: #f8e5e8;
          border-radius: 15px;
          width: 60%;
          padding: 1em;
        }
        .span {
          color: #4b8ada;
          font-size: 1.2em;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          color: rgb(35, 174, 237);
        }
        @media (max-width: 450px) {
          .table {
            font-size: 0.7em;
            line-height: 1em;
            margin: 1em auto;
            padding: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getFetchedDogsByName } = await import('../db.js');

  const fetchedDogNames = await getFetchedDogsByName(context.params);

  //console.log('result: ', JSON.stringify(fetchedDogNames));

  if (fetchedDogNames.length === 0) {
    return { props: {} };
  }
  return {
    props: {
      fetchedDogNames,
    },
  };
}
