const { body, validationResult } = require('express-validator');

exports.RegisterValidation = [
	body('email', 'should be a valid email ').isEmail(),
	body('password', 'should be at least 8 characters').isLength({ min: 8 }),
];

exports.LoginValidation = [
	body('email', 'should be a valid email ').isEmail(),
	body('password', 'should be at least 8 characters').isLength({ min: 8 }),
];

exports.Validation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};
