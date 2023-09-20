const User = require('../models/user');

const getUserProfile = (req, res) => {
    const userId = req.userId;  // Assuming you have middleware that sets req.userId
    
    User.findById(userId)
    .select('-password')  // Exclude the password field
    .then(user => {
        if (!user) {
            return res.status(404).json({
            message: 'User not found'
        });
    }
        res.status(200).json({
            userProfile: user
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

module.exports = { getUserProfile }