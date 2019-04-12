const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const userRouter = require('./routes/user')

app.use(bodyParser.json())

app.use('/users', userRouter)

app.listen(3000, err => {
  if (err) {
    throw err
  }
  console.log('server runnign in port 3000')
})
