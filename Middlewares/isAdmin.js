const UserSchema = require('../Models/auth');

exports.isAdmin = async (req, res, next) => {
	try {
		const user = await UserSchema.findById(req.user.id);
		if (user.role != 'admin') {
			return res.status(400).send({ errors: [{ msg: 'not authorized' }] });
		}
		next();
	} catch (error) {
		return res.status(500).send('server error');
	}
};
