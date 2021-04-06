const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token']
    
    if (!token) {
        res.status(401).json({
            msg: 'No token, autherization deenied'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()

    } catch (error) {
        res.status(401).json({
            msg: 'Token is not valid'
        })
    }
}

module.exports = verifyToken