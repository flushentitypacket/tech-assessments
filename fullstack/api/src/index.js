const {oneLine} = require('common-tags')

const express = require('express')
const app = express()
const port = 3000

const {knex} = require('./db')
const auth = require('./auth')

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

    const token = auth.createToken()
    res.send({token})
  })
  app.get('/channels', (req, res) => {
    const authHeader = req.header('Authorization')
    const match = authHeader.match(new RegExp('^Bearer (.*)$'))
    if (match === null) return res.sendStatus(400)
    const token = match[1]
    if (!auth.verify(token)) return res.sendStatus(401)

    res.send({
      channels: [],
    })
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

const start = async () => {
  runApp()
}

start()
