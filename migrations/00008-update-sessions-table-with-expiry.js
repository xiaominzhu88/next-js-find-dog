// Create the sessions table
exports.up = async (sql) => {
  // ALTER TABLE distributors ADD COLUMN address varchar(30);
  //ALTER TABLE distributors DROP COLUMN address RESTRICT;

  sql`
    ALTER TABLE sessions ADD COLUMN 
      expiry_timestamp TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '24 hours'
      `;
};

// Delete the sessions table
exports.down = async (sql) => {
  sql`
    ALTER TABLE sessions DROP COLUMN expiry_timestamp
      `;
};
