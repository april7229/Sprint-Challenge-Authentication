const User = require('../models/userModels');
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const { mysecret } = require( '../../config' );


const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.

  User.create( { username, password } )
    .then( users =>
    {
      const token = generateToken( users );

      res.status( 201 ).json( { user: user.username, token } );
    } )
    .catch( err =>
    {
      res.status( 500 ).json( err );
    } );
};
function generateToken( user )
{
  const options = {
    expiresIn: '60m',
  }
  const payload = { name: user.username };
  return jwt.sign( payload, mysecret, options );
}

module.exports = {
  createUser
};
