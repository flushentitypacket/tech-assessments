exports.knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'db',
    port: 5432,
    user : 'abc',
    password : 'abc',
    database : 'abc',
  },
  migrations: {
    directory: './migrations',
  }
})
