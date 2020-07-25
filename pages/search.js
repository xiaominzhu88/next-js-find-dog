import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Breeds() {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  // -------------  update input value  ------------------------

  function showValue(e) {
    setInput(e.target.value);
  }

  // -------------  use API Router fetch with SWR ----------------
  //const { data, error } = useSWR('/api/search', fetcher);

  //if (error) return <div>Failed to load</div>;
  //if (!data) return <div>Loading...</div>;
  //console.log('FETCHED-API-DATA: ', data);

  // get list which contains name and id from database for each dog, an Array
  //const dataArray = data.map((a) => a.id + ' 🐶' + a.name);
  //console.log('DATA-ARRAY: ', dataArray);

  // from the list(dataArray), filter a new list out, which contains the user input and convert it to a new list as 'newList-filtered', it will be showed in 'return' below

  function fetchSearchResults(e) {
    e.preventDefault();
    fetch(`/api/search?name=${input}`)
      .then((res) => res.json())
      .then((fetchedDogs) => {
        setFiltered(fetchedDogs);
      });

    // if (input !== '') {
    //   let newList = [];
    //   newList = dataArray.filter((val) => val.toLowerCase().includes(input));
    //   setFiltered(newList);
    // } else {
    //   setInfo('Ops,search for a breed?');
    // }
  }
  //console.log('filtered: ', filtered);
  return (
    <div className="search-content">
      <Head>
        <title>search</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="search dogs by breeds" content="search" />
      </Head>
      <Header />

      {/* use matrial-ui input field */}
      <div className="searchBar">
        <form onSubmit={fetchSearchResults} noValidate autoComplete="off">
          <TextField
            id="filled-search"
            label="Search Breed 🔎"
            type="search"
            value={input}
            onChange={showValue}
            style={{ width: 300 }}
          />
        </form>
      </div>

      <div className="table">
        {input === '' ? (
          []
        ) : (
          <ul>
            <h3>
              {/* get the sum from the data result which is as filtered length here */}
              <span className="span">
                {input !== '' ? filtered.length : '0'}
              </span>{' '}
              Breeds for you{' '}
              <span className="span" role="img" aria-label="emoji">
                💝
              </span>
            </h3>
            {filtered.map((dog, i) => {
              // use REGEX to match the exact id from each dog and use it as the path '/breeds/[id]' to get each dog
              //const eachId = name.match(/\d/g).join('');
              return (
                <li key={`${dog}_${i}`}>
                  <Link key={i} href="/breeds/[id]" as={`/breeds/${dog.id}`}>
                    <a key={dog.name}>{' 🐶 ' + dog.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          // filter from the data result and create each of them as a link
          // <ul>
          //   {filtered.map((name, i) => {
          //     // use REGEX to match the exact id from each dog and use it as the path '/breeds/[id]' which below on line 91
          //     const eachId = name.match(/\d/g).join('');
          //     //console.log('eachId: ', eachId);
          //     //console.log('name: ', name);

          //     return (
          //       <li key={i}>
          //         {/* Use ${eachId} dynamically attach each dog which has the same id, which matches each id from each name use Regex */}
          //         <Link href="/breeds/[id]" as={`/breeds/${eachId}`}>
          //           <a>{name}</a>
          //         </Link>
          //       </li>
          //     );
          //   })}
          // </ul>
        )}
      </div>
      <Footer />

      <style jsx>{`
        .search-content {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 20px);
        }

        .searchBar {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 2em auto;
          width: 10em;
          flex: 1;
        }

        table,
        ul {
          text-align: center;
          list-style: none;
          font-family: Gill sans;
          line-height: 2em;
          margin: 0 auto;
          background-color: rgb(227, 52, 167);
          border-radius: 15px;
          width: 60%;
          padding: 1em;
          color: #fff;
        }
        .span {
          color: #fff;
          font-size: 2em;
        }
        a {
          text-decoration: none;
          color: #fff;
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
          .searchBar {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}

// instead doing getServerSideProps, using API ROUTER above
// export async function getServerSideProps(context) {
//   const { getFetchedDogsByName } = await import('../db.js');

//   const fetchedDogNames = await getFetchedDogsByName(context.params);

//   console.log('result: ', JSON.stringify(fetchedDogNames));

//   if (fetchedDogNames.length === 0) {
//     return { props: {} };
//   }
//   return {
//     props: {
//       fetchedDogNames,
//     },
//   };
// }
