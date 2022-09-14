const { Type } = require('../models/models');

class TypeController {
    async getAll(req, res) {
        const types = await Type.findAll();
        res.status(200).json(types);
    }
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        res.status(200).json(type);
    }
}

module.exports = new TypeController()