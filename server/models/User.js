const mongoose = require('mongoose');
//this is the mongo model
// for the id it will be generated through mongo atlas 
const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String,
    unique: true, // Ensure that the Google ID is unique
    sparse: true  // Allows for null values, accommodating users who don't sign up with Google
  },
  password: {
    type: String,
    required: false // Make the password not required as Google users won't have one
  },
  num_telephone: {
    type: String,
    required: false,
  },
  cin: {
    type: String,
    required: false,
    unique: true
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  }
});

module.exports = mongoose.model('Utilisateur', userSchema);
