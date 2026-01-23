// Hardcoded user for testing
const hardcodedUser = {
    email: 'test@example.com',
    password: 'password123', // In a real-world scenario, never store passwords in plain text
    name: 'Test User',
    id: 1
};

// Login controller
const loginUser = (req, res) => {
    const { email, password } = req.body;

    // Check if user exists and password matches
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        res.json({ id: hardcodedUser.id, email: hardcodedUser.email, name: hardcodedUser.name });
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
    }
};

module.exports = { loginUser };
