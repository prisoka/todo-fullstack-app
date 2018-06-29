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
    connection: 'postgres://llkbntayrxsgsk:1370fe950096af351a3825f7db10acf43913dbdacc466b391d81234ec3414dfe@ec2-107-22-183-40.compute-1.amazonaws.com:5432/dh6nu9s8t9s10'
  }
};
