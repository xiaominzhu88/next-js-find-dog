require('./extractHerokuDatabaseEnvVars')();

const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
const argon2 = require('argon2');

const postgres = require('postgres');
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

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

export async function getFetchedDogsByName(name) {
  // use this syntax 'WHERE LOWER(name) like' to get name either lowercase or uppercase
  const columns = ['name', 'id', 'url'];
  const dogNames = await sql`
   select ${sql(columns)} from fetchedDogs WHERE LOWER(name) like LOWER(${
    '%' + name + '%'
  })
   `;

  return dogNames;
}

export async function selectUserByUsername(username, password) {
  const usersWithUsername = await sql`
  SELECT * FROM users WHERE username = ${username}
  `; //select from always returns an array, even if its one
  // console.log(usersWithUsername[0]);

  if (usersWithUsername.length === 0) return usersWithUsername;

  const passwordMatches = await argon2.verify(
    usersWithUsername[0].password_hash,
    password,
  );
  console.log(passwordMatches); // returns boolean
  console.log('DB.js--usersWithUsername: ', usersWithUsername[0]);

  if (passwordMatches) {
    return usersWithUsername;
  } else {
    return [];
  }
}

export async function insertUser(username, passwordHash) {
  return sql`
INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})
`;
}

export async function insertSession(userId, token) {
  return sql`
    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})
  `;
}

export async function selectSessionByToken(token) {
  //console.log('TOKEN: ', token);
  return sql`
    SELECT * FROM sessions WHERE token = ${token}
        `;
}

export async function deleteSessionByToken(token) {
  return sql`
    DELETE FROM sessions WHERE token = ${token}
  `;
}

// for home page save favourite
export async function insertFavo(
  favoName,
  lifeSpan,
  breedGroup,
  temperament,
  url,
  dogId,
) {
  return await sql`
    INSERT INTO favos (favoName,lifeSpan,breedGroup,temperament,url,dogId)
    VALUES (${favoName},${lifeSpan},${breedGroup},${temperament},${url},${dogId})
`;
}

// for sum page get favourite
export async function getFavoDogs() {
  const favoDogs = await sql`
  SELECT * FROM favos
  `;
  return favoDogs;
}

// for contact page button click remove favourite
export async function deleteFavo() {
  const dogsToDelete = await sql`
  DELETE FROM favos 

`;
  console.log('DOGSTODELETE: ', dogsToDelete);
  return dogsToDelete;
}
