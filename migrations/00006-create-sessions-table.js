// Create the sessions table
exports.up = async (sql) => {
  sql`
    CREATE TABLE sessions(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR NOT NULL,
      expiry_timestamp TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '24 hours',
      token VARCHAR(32) UNIQUE NOT NULL
    )
  `;
};

// Delete the sessions table
exports.down = async (sql) => {
  sql`
    DROP TABLE sessions
  `;
};
