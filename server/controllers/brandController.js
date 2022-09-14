const { Brand } = require('../models/models');

class BrandController {
    async getAll(req, res) {
        const brands = await Brand.findAll();
        res.status(200).json(brands);
    }
    async create(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        res.status(200).json(brand);
    }
}

module.exports = new BrandController()