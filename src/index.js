const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const router = express.Router()

const usersRouter = require('./routes/users')
const sessionsRouter = require('./routes/session')

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/auth', sessionsRouter)

app.listen(8000, () => {
  console.log('Server running on port 8000')
})