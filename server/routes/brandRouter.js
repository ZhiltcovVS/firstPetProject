const Router = require('express');
const router = new Router();
const {getAll, create} = require('../controllers/brandController');
const checkRole = require('../middleware/checkRole');

router.get('/', getAll);
router.post('/', checkRole("ADMIN"), create);

module.exports = router