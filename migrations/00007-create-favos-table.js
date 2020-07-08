exports.up = async (sql) => {
  sql`
  CREATE TABLE favos(
    id SERIAL PRIMARY KEY,
   
    favoName VARCHAR,
    lifeSpan VARCHAR,
    breedGroup VARCHAR,
    temperament VARCHAR,
    url VARCHAR
)`;
};
exports.down = async (sql) => {
  sql`
	
	DROP TABLE favos
	
	`;
};
