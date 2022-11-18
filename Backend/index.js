const express = require('express');
const app = express();
const { User } = require('./db')
const userRouter = require('./routes/routes')
const { run } = require('./seed')

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000']
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', userRouter)
const { PORT = 4000 } = process.env

app.listen(PORT, async () => {
  console.log(`Dogs are ready at http://localhost:${PORT}`);
  await run()
});