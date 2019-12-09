const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const flash = require('express-flash');
require('dotenv').config();

const userController = require('./controllers/userController')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(flash())

app.use('/dist', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.status(200).set({'Content-Type': 'text/html'}).sendFile(path.resolve(__dirname, '../index.html'))
})

app.post('/verification', userController.verifyUserInput, (req, res) => {
  res.status(200).json(res.locals.user)
});

app.post('/confirmation', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user)
});

// catch-all route handler for any requests to an unknown route
app.all('*', (req, res) => {
  res.sendStatus(404);
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errObj = Object.assign((defaultErr, err));
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});