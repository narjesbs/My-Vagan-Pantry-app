const express = require('express');
const {
	RegisterValidation,
	LoginValidation,
	Validation,
} = require('../Middlewares/register');
const { isAuth } = require('../Middlewares/isAuth');
const { isAdmin } = require('../Middlewares/isAdmin');
const {
	Register,
	Login,
	GetUsers,
	GetUserPantry,
} = require('../Controllers/auth');
const AuthRoute = express.Router();

AuthRoute.post('/signUp', RegisterValidation, Validation, Register);

AuthRoute.post('/signIn', LoginValidation, Validation, Login);

AuthRoute.get('/current', isAuth, (req, res) => res.send(req.user));

AuthRoute.get('/UsersList', GetUsers);

AuthRoute.get('/GetUserPantry ', isAuth, GetUserPantry);

module.exports = AuthRoute;
