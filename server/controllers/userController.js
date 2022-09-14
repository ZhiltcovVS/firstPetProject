const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('Не заполнен логин или пароль'))
        };

        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            return next(ApiError.badRequest('Пользваотельно с таким email уже существует'))
        };

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword, role});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, email, role);

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('Не заполнен логин или пароль'))
        };
        const user = await User.findOne({where: {email}});
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!user || !validPassword) {
            return next(ApiError.badRequest('Неправильный логин или пароль'))
        };
        const token = generateJwt(user.id, email, user.role);
        res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        res.json({token});
    }

}

module.exports = new UserController()