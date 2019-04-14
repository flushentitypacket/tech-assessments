const {oneLine} = require('common-tags')
const express = require('express')
const app = express()
const port = 3000

const {knex} = require('./db')

const runApp = () => {
  app.use(express.json({
    strict: true,
  }))

  app.get('/', (req, res) => res.send('Hello World!'))
  app.post('/auth', async (req, res) => {
    if (!req.body) return res.sendStatus(400)
    const {username, password} = req.body
    if (!username) return res.sendStatus(400)
    if (!password) return res.sendStatus(400)

    const match = await knex.table('users')
      .whereRaw(oneLine(`
        username = '${username}'
        AND password = '${password}'
      `))
      .count('*')
      .then(([r]) => r.count > 0)
    if (!match) return res.sendStatus(401)

    res.send('tokengoeshere')
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

const start = async () => {
  runApp()
}

start()
