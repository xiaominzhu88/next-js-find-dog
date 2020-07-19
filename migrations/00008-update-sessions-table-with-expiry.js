// Update sessions table with expiry-timestamp
exports.up = async (sql) => {
  // ALTER TABLE --- ADD COLUMN --- ;
  //ALTER TABLE --- DROP COLUMN --- ;

  sql`
    ALTER TABLE sessions ADD COLUMN 
      expiry_timestamp TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '24 hours'
      `;
};

// Delete from the sessions table expiry-timestamp
exports.down = async (sql) => {
  sql`
    ALTER TABLE sessions DROP COLUMN expiry_timestamp
      `;
};
