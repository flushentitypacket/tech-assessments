const express = require('express')
const app = express()
const port = 3000

const {knex} = require('./db')

const runApp = () => {
  app.get('/', (req, res) => res.send('Hello World!'))
  app.post('/auth', (req, res) => {
    res.send('tokengoeshere')
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

const start = async () => {
  runApp()
}

start()
