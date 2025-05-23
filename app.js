const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');

const app = express();

app.use(bodyParser.json());
app.use('/registration/user', userRouter);

module.exports = app;
