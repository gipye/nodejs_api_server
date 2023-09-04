const router = require('express').Router();
const controller = require('./controller');

/*
router.get('/request-method/get', controller.get);
router.post('/request-method/post', controller.post);
router.post('/data', controller.body);
router.get('/query', controller.query);
*/

router.post('/login', controller.login);
router.post('/signup', controller.signUp);

module.exports = router;
