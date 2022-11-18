const { User } = require('./models/User')
const bcrypt = require('bcrypt')
const { check, validationResult } = require("express-validator")
const { response } = require('express')

const attemptLogin = async (req, res) => {
    const user = await User.findOne({where: {email: req.body.email}})
    .then(async (response) => {
        const succesfulLogin = await bcrypt.compare(req.body.password, response.password)
        if (succesfulLogin) res.json(response)
        else res.json({error: "Incorrect login, no user found matching that information."})
    })
    .catch(err => res.json({error: "Incorrect login, no user found matching that information."}))
    
}

const getUsers = async (req, res) => {
    const users = await User.findAll()
    res.json(users)
}

const userRegister = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 2)

     const user = await User.create({email: req.body.email, password: hashedPassword})
    res.json(user)
}

const confirmUser = async (req, res) => {
    const user = await User.findOne({where: {email: req.body.email}})
    if (user) res.json(user)
    else res.json({"error": "user not found"})
}

const resetPassword = async (req, res) => {
    const user = await User.findByPk(req.body.id)

    const hashedPassword = await bcrypt.hash(req.body.password, 2)

    const updatedUser = await user.update({password: hashedPassword})

    res.json(updatedUser)

}

module.exports = {
    attemptLogin,
    getUsers,
    userRegister,
    confirmUser,
    resetPassword

}