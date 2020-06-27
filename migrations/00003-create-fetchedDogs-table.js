exports.up = async (sql) => {
  sql`
	CREATE TABLE fetchedDogs (bred_for VARCHAR, breed_group VARCHAR, id SERIAL PRIMARY KEY, life_span VARCHAR, name VARCHAR, origin VARCHAR, temperament VARCHAR, weight VARCHAR, height VARCHAR, url VARCHAR )

	
	`;
};

exports.down = async (sql) => {
  sql`
	
	DROP TABLE fetchedDogs
	
	`;
};
