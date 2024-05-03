const User = require('../models/User');  // Ensure this path is correct and consistent in naming
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, cin, tel, email, password, confirmPassword } = req.body;

    // Vérifier que tous les champs requis sont remplis (if needed for custom messages)
    if (!firstName || !lastName || !cin || !tel || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.' });
    }

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Les mots de passe ne correspondent pas.' });
    }

    // Vérifier que l'email n'est pas déjà utilisé
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cette adresse email est déjà utilisée.' });
    }
   // shoud be removed
    const hashedPassword = await bcrypt.hash(password, 10);
    // Créer un nouvel utilisateur
    const newUser = new User({
        nom: firstName,  // Aligning the field with schema
        prenom: lastName,  // Aligning the field with schema
        email: email,
        password: hashedPassword,  // Storing hashed password
        num_telephone: tel,  // Aligning the field with schema
        cin: cin  // Aligning the field with schema
        // The 'role' will automatically be set to 'user' as per schema default
      });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();
    
    // Possibly set up session or token here if login immediately after signup is intended

    res.status(201).json({ message: 'Inscription réussie' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Une erreur est survenue. Veuillez réessayer plus tard.' });
}
};

module.exports = {
    signup
  };
