import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Search() {
  const [searchDogName, setSearchDogName] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [info, setInfo] = useState('');

  const apiKey = process.env.apiKey;

  const fetchSearchData = () => {
    fetch('https://api.TheDogAPI.com/v1/breeds', {
      method: 'GET',
      dataType: 'JSON',
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);

        const dogBreedsName = result.map((dog) => dog.name);

        if (!dogBreedsName) {
          return '';
        } else {
          setSearchDogName(dogBreedsName);
        }
      })
      .then((error) => {
        return error;
      });
  };
  console.log(searchDogName);

  function showValue(e) {
    setInputValue(e.target.value);
  }

  const oldList = searchDogName.map((el) => {
    return el.toLowerCase();
  });

  function showDataValue(e) {
    e.preventDefault();
    fetchSearchData();

    if (inputValue !== '') {
      let newList = [];
      newList = oldList.filter((val) => val.includes(inputValue));
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

      {/* <p>{searchDogName}</p> */}
      {/* <input value={searchDogName.map((name) => name)} /> */}
      <div className="searchBar">
        <form>
          <input
            placeholder="Search Breed..."
            value={inputValue}
            onChange={showValue}
          />
        </form>
        <button onClick={showDataValue}>
          <span role="img" aria-label="emoji">
            {' '}
            🔎
          </span>
        </button>
      </div>
      <div>
        <p>
          {inputValue === '' ? (
            info
          ) : (
            <ul>
              {filtered.map((name, i) => {
                return <li key={i}>{name}</li>;
              })}
            </ul>
          )}
        </p>
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
        button {
          width: 3em;
          height: 2em;
          padding: 5px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          background-color: rgb(217, 236, 230);
          font-family: cursive;
          font-size: 1em;
          font-weight: bold;
          outline: none;
          transition: background-color 0.2s ease-in;
          margin-left: 1em;
        }
        button:hover {
          background-color: yellow;
          font-weight: 700;
        }
        button:active {
          transition: transformY(4px);
          background-color: rgb(235, 208, 121);
        }
        ul,
        p {
          text-align: center;
          list-style: none;
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          line-height: 2em;
        }
      `}</style>
    </div>
  );
}
