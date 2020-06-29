exports.up = async (sql) => {
  sql`
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL
)`;
};
exports.down = async (sql) => {
  sql`
	
	DROP TABLE users
	
	`;
};
