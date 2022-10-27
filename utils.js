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

module.exports = {
    attemptLogin,
    getUsers

}