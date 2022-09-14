const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if(req.methods === 'OPTIONS') {
        next()
    }
    try {
        // Проверяется наличие токена
        // Проверяется валидность токена и срок жизни
        // Если токен действителен, создается новый токен
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(401).json({message: 'Не авторизован'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next()
    } catch(e) {
        res.status(401).json({message: 'Не авторизован'})
    }
}