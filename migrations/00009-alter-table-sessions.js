exports.up = async (sql) => {
  sql`
ALTER TABLE sessions
ALTER COLUMN token TYPE VARCHAR(32) 

`;
  sql`
ALTER TABLE sessions ADD UNIQUE (token);
`;
  sql`
ALTER TABLE sessions
ALTER COLUMN token SET NOT NULL
`;
};

exports.down = async (sql) => {
  sql`
    ALTER TABLE sessions
ALTER COLUMN token TYPE VARCHAR NOT NULL
  `;
};
