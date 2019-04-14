const TABLE_NAME = 'users'
exports.up = async (knex) => {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()
    table.string('username')
    table.string('password')
    table.timestamps()
  })
}

exports.down = (knex) => {
  return knex.schema
    .dropTable(TABLE_NAME)
}
