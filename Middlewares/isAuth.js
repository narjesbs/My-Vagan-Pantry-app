const jwt = require('jsonwebtoken');
const UserSchema = require('../Models/auth');

exports.isAuth = async (req, res, next) => {
	const token = req.header('authorization');
	try {
		if (!token) {
			return res.status(400).send({ errors: [{ msg: 'not registered' }] });
		}
		var decoded = jwt.verify(token, process.env.SecretKey);
		const user = await UserSchema.findById(decoded.id);
		req.user = user;
		next();
	} catch (error) {
		return res.status(500).send('server error');
	}
};
