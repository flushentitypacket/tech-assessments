const {oneLine} = require('common-tags')

exports.knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port: process.env.DB_PORT,
    database : process.env.DB_NAME,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
  },
  migrations: {
    directory: 'src/db/migrations',
  }
})

exports.seed = async () => {
  await exports.knex.raw(oneLine(`
    INSERT INTO users (username, password)
    VALUES (:username, :password)
    ON CONFLICT DO NOTHING;
  `), {
    username: process.env.SEED_USERNAME,
    password: process.env.SEED_PASSWORD,
  })
}
