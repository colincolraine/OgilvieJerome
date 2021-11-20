const router = require('express').Router()
const homeController = require('../Controller/Home/homeController');
const aboutusController = require('../Controller/AboutUs/aboutusController');
const loginController = require('../Controller/Login/loginController');
const registerController = require('../Controller/Register/registerController');

router.get('/',homeController.viewHomePage)
router.get('/aboutus',aboutusController.viewAboutUsPage)
router.get('/login',loginController.viewLoginPage)
router.get('/register',registerController.viewRegisterPage)

module.exports = router