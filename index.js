const express = require('express');
const app = express();
const { User } = require('./db')
const userRouter = require('./routes/routes')
const { run } = require('./seed')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', userRouter)
const { PORT = 4000 } = process.env

app.listen(PORT, async () => {
  console.log(`Dogs are ready at http://localhost:${PORT}`);
  await run()
});