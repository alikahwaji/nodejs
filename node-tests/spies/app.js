var db = require('./db.js')
module.exports.handleSignup = (email, password) => {
  // Check if email aleardy exists
  db.saveUser({email, password})
  // Save the user to the database
  // Send the welcome email
}
