const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, nom_famille } = req.body;
    try {
        console.log('Attempting to register user:', req.body);  // Log des données reçues
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, nom_famille });
        console.log('User created:', user);  // Log après création
        res.status(201).json({ user, message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Error creating user:', error);  // Log en cas d'erreur
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'votre_secret', { expiresIn: '1h' });
        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
};

module.exports = {
    register,
    login
};