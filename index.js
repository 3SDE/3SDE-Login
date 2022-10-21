const express = require('express');
const app = express();
const { User } = require('./db')
const sequelize = require('./seed')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/')

const { PORT = 4000 } = process.env

app.listen(PORT, () => {
    sequelize.sync({ force: false });
    console.log(`Dogs are ready at http://localhost:${PORT}`);
  });