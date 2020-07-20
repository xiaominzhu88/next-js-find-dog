exports.up = async (sql) => {
  sql`
	CREATE TABLE fetchedDogs (bred_for VARCHAR, breed_group VARCHAR, id SERIAL PRIMARY KEY, life_span VARCHAR, name VARCHAR, origin VARCHAR, temperament VARCHAR, height_imperial VARCHAR, height_metric VARCHAR, weight_imperial VARCHAR, weight_metric VARCHAR, url VARCHAR )

	
	`;
};

exports.down = async (sql) => {
  sql`
	
	DROP TABLE fetchedDogs
	
	`;
};
