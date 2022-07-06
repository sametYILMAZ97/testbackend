const express = require('express')
const helmet = require('helmet')
const config = require('./config')
const loaders = require('./loaders')
const {
  AdminRoutes,
  AttendanceRoutes,
  AttendanceDayRoutes,
  EmployeeRoutes,
  SalaryRoutes,
  WorkRoutes,
} = require('./api-routes')

config()
loaders()

const app = express()
app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
  app.use('/api/v1/employee', EmployeeRoutes)

  console.log(`${process.env.APP_PORT} Portundan Sunucu Ayağa Kalktı.`)
})
