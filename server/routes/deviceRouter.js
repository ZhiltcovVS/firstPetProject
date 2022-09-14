const Router = require('express');
const router = new Router();
const {getAll, getById, create} = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRole');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', checkRole('ADMIN'), create);

module.exports = router