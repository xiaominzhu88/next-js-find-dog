require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

const starDogs = [
  {
    id: '1',
    className: 'activ',
    src: '/bullterrier.jpg',
    url: '/star/1',
    h3: 'Bullterrier',
    p: 'activity: 100',
  },
  {
    id: '2',
    className: 'middle',
    src: '/favicon.jpg',
    url: '/star/2',
    h3: 'Frenchy',
    p: 'activity:50',
  },
  {
    id: '3',
    className: 'low',
    src: '/englischedogge.jpg',
    url: '/star/3',
    h3: 'English bulldog',
    p: 'activity:0',
  },
];

export function getDogs() {
  return starDogs;
}

export async function getDogsById(id) {
  const dogs = await sql`
  select * from dogs WHERE id = ${id}
  `;
  return dogs;
}

export async function getFetchedDogsById(id) {
  const fetchedDogs = await sql`
  select * from fetchedDogs WHERE id = ${id}
  `;
  return fetchedDogs;
}
