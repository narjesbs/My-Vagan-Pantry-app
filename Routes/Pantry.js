const express = require('express');
const {
	AddPantry,
	GetPantry,
	UpdatePantry,
	DeletePantry,
	AllPantryItems,
} = require('../Controllers/Pantry');
const { isAdmin } = require('../Middlewares/isAdmin');
const { isAuth } = require('../Middlewares/isAuth');
const PantryRoute = express.Router();

// method get
// /AllPantryItems
PantryRoute.get('/AllPantryItems', AllPantryItems);

// method post
// req.body
// /AddPantry
PantryRoute.post('/AddPantry',  AddPantry);

// method get
// req.params
// /Pantry/:id
PantryRoute.get('/Pantry/:',  GetPantry);

// method put
// req.params
// req.body
// /UpdatePantry/:id
PantryRoute.put('/UpdatePantry/:id',  UpdatePantry);

// method delete
// req.params
// /DeletePantry/:id
PantryRoute.delete('/DeletePantry/:id',  DeletePantry);

module.exports = PantryRoute;
