exports.up = async (sql) => {
  await sql`
  CREATE TABLE favos(
    id SERIAL PRIMARY KEY,
   
    favoName VARCHAR,
    lifeSpan VARCHAR,
    breedGroup VARCHAR,
    temperament VARCHAR,
    url VARCHAR,
    dogId VARCHAR,
    -- use unique dogId to be sure that same dog will not be saved
    UNIQUE(dogId)
)`;
};
exports.down = async (sql) => {
  await sql`
	
	DROP TABLE favos
	
	`;
};
