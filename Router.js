const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/login',controller.login);
router.post('/registor',controller.RegistorUser);
    
module.exports = router;