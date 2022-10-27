const express = require('express')
const { attemptLogin, getUsers } = require('../utils')

const userRouter = express.Router()

userRouter.post('/login', attemptLogin)

userRouter.get('/', getUsers)

module.exports = userRouter