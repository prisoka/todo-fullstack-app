'use strict';

module.exports = {
  development: {
    client: 'pg',
    // connection: 'postgres://user:pass@localhost:5432/dbname'
    connection: 'postgres://postgres:p@55w0rd@localhost:5432/todo_db',
  },

  test: {
    client: 'pg',
    connection: 'postgres://postgres:p@55w0rd@localhost:5432/todo_db',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
