module.exports = () => {
  const { Pool } = require('pg'),
    connectionString = 'postgres://postgres:password@host.docker.internal:5430/postgres';

  return new Pool({
    connectionString,
    max: 1
  });
};
