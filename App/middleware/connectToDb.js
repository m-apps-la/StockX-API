module.exports = () => {
  const { Pool } = require('pg');
  let connectionString;
  NODE_ENV = development ? connectionString = 'postgres://postgres:password@host.docker.internal:5430/postgres' : connectionString = 'postgres://postgres:password@host.docker.internal:5430/postgres';

  return new Pool({
    connectionString,
    max: 1
  });
};

// postgres://postgres:password@host.docker.internal:5430/postgres
