const express = require('express')
const { attemptLogin, getUsers, userRegister} = require('../utils')

const userRouter = express.Router()

userRouter.post('/login', attemptLogin)
userRouter.post('/registration', userRegister)

userRouter.get('/', getUsers)

module.exports = userRouter