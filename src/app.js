const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const userRouter = require('./routes/usersRouter');

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT);
app.use('/api', userRouter)
module.exports = app;