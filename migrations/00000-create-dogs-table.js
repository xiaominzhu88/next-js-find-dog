exports.up = async (sql) => {
  sql`
	CREATE TABLE dogs (id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, h2 VARCHAR NOT NULL, p VARCHAR NOT NULL, src VARCHAR NOT NULL, className1 VARCHAR NOT NULL, className2 VARCHAR NOT NULL)

	
	`;
};

exports.down = async (sql) => {
  sql`
	
	DROP TABLE dogs
	
	`;
};
