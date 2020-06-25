import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Search1({ fetchedDogNames }) {
  const [searchDogName, setSearchDogName] = useState([]);
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [info, setInfo] = useState('');

  // get data from database at the bottom {getFetchedDogsByName}
  // which is an Array with 'name' and 'id'
  const fetchedAllDogNames = fetchedDogNames.map((val) => val.name);

  // get all the ids for all the dogs from database as an Array
  const ids = fetchedDogNames.map((val) => val.id);

  const oldList = searchDogName.map((el) => {
    return el.toLowerCase();
  });

  // search function, use filter to find the result which contains
  // the input value

  function showDataValue(e) {
    e.preventDefault();
    setSearchDogName(fetchedAllDogNames);
    if (input !== '') {
      let newList = [];
      newList = oldList.filter((val) => val.includes(input));
      setFiltered(newList);
    } else {
      setInfo('Ops,search for a breed?');
    }
  }

  // -------------  update input value  ------------------------
  function showValue(e) {
    setInput(e.target.value);
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
            label="Search"
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
            Go
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
              return (
                <li key={i}>
                  {/* Use ${id[id]} dynamically attach each dog which has the same id, because id from database was an Array with ingeter, have to use index to get each one*/}
                  <Link href="/search1/[id]" as={`/search1/${ids[i]}`}>
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
