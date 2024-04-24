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
  password: {
    type: String,
    required: true
  },
  num_telephone: {
    type: String,
    required: true
  },
  cin: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Utilisateur', userSchema);
