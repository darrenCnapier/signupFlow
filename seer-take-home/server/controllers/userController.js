const {pool} = require('../models/config')
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');

const userController = {};

// middleware function to display the user input for verification
userController.verifyUserInput = (req, res, next) => {
  let username = req.body.username;
  let email = req.body.email;

  // THE FOLLOWING WAS MEANT TO CHECK USERNAME AGAINST THE DATABASE AND RETURN A MESSAGE IF THE VALUE ALREADY EXISTED
  // UNFORTUNATELY RAN OUT OF TIME
  // pool.query(`SELECT * FROM users WHERE username = '${username}'`, (error, result) => {
  //   if (error) throw error;

  //   if (result) {
  //     console.log('username not available')
  //     res.redirect({ message: req.flash('The username you chose is not available') }, '/');
  //   } else return next();
  // });
  return next();
};

// middleware function to insert user input in database once verified
userController.createUser = (req, res, next) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let username = req.body.username;

  res.locals.user = req.body

  //bcrypt function to hash password before storing in database
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if (err) return next (err);
      req.body.password = hash;

  // 
    pool.query(`SELECT * FROM users WHERE email = '${email}'`, (error, result) => {
      if (error) throw error;

      if (result.rowCount === 0) {
        const insertionStatement = `INSERT INTO users ("first_name", "last_name", "email", "password", "username")
                                    VALUES ('${firstName}', 
                                            '${lastName}',
                                            '${email}',
                                            '${req.body.password}',
                                            '${username}')`;
        pool.query(insertionStatement, (error, result) => {
          if (error) throw error;
        })
      } 
      //else {
        //   // didn't quite have time to get this flash message working
        //   res.render('/', {message: req.flash('There is already an account associated with your email')})
        // }
      });
    });
  });
  return next();
};

module.exports = userController;
