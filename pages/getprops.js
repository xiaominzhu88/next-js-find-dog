import React, { useState } from 'react';

const Index = (props) => {
  const [inputBreed, setInputBreed] = useState('');
  const [filtered, setFiltered] = useState([]);

  function inputValue(e) {
    setInputBreed(e.target.value);
  }
  let oldList = props.names.map((el) => {
    return el.toLowerCase();
  });

  console.log(inputBreed);

  function showData() {
    if (inputBreed !== '') {
      let newLists = [];
      newLists = oldList.filter((val) => val.includes(inputBreed));
      setFiltered(newLists);
    }
  }
  console.log(filtered);

  return (
    <div>
      <h1>Dog Breeds</h1>
      <input value={inputBreed} onChange={inputValue} />
      <button onClick={showData}>find</button>
      <ul>
        {filtered.map((filteredValue, i) => {
          return <li key={i}>{filteredValue}</li>;
        })}
      </ul>
    </div>
  );
};
const apiKey = process.env.apiKey;

export async function getServerSideProps(context) {
  const res = await fetch('https://api.TheDogAPI.com/v1/breeds', {
    method: 'GET',
    dataType: 'JSON',
    headers: { 'X-Api-Key': `${apiKey}` },
  });
  const data = await res.json();
  const names = data.map((entry) => entry.name);

  console.log(`Show data fetched. Count: ${data}`);

  if (names === undefined) {
    return { props: {} };
  }

  return {
    props: {
      names: names,
    },
  };
}

export default Index;
