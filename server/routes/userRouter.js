const Router = require('express');
const router = new Router();
const {registration, login, check} = require('../controllers/userController');
const checkAuthorization = require('../middleware/checkAuthorization');

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', checkAuthorization, check);

module.exports = router