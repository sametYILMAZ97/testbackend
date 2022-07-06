const express = require('express')
const helmet = require('helmet')
const config = require('./config')
const loaders = require('./loaders')
const { TestGetRoutes } = require('./api-routes')

config()
loaders()

const app = express()
app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
  app.use('/api/v1/testGet', TestGetRoutes)

  console.log(`${process.env.APP_PORT} Portundan Sunucu Ayağa Kalktı.`)
})
