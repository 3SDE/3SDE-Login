const express = require('express')
const { attemptLogin, getUsers, userRegister, confirmUser, resetPassword} = require('../utils')

const userRouter = express.Router()

userRouter.post('/login', attemptLogin)
userRouter.post('/registration', userRegister)
userRouter.post('/forgotPassword', confirmUser)
userRouter.put('/reset', resetPassword)

userRouter.get('/', getUsers)

module.exports = userRouter