const UserSchema = require('../Models/auth');
const PantrySchema = require('../Models/Pantry');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
	const { firstName, lastName, email, password, role } = req.body;

	try {
		const user = new UserSchema(req.body);
		const userFound = await UserSchema.findOne({ email });
		if (userFound) {
			return res.status(400).send({ errors: [{ msg: 'user already exists' }] });
		}
		// password cryptic
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		user.password = hashedPassword;
		// token
		const payload = { id: user._id };
		const token = jwt.sign(payload, process.env.SecretKey);
		await user.save();
		res.status(200).send({ msg: 'registration is successful', user, token });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: 'registration failed' }] });
	}
};

exports.Login = async (req, res) => {
	const { email, password, role } = req.body;

	try {
		const user = await UserSchema.findOne({ email });
		if (!user) {
			return res.status(400).send({ errors: [{ msg: 'bad credentials' }] });
		}
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(400).send({ errors: [{ msg: 'bad credentials' }] });
		}
		// token
		const payload = { id: user._id };
		const token = jwt.sign(payload, process.env.SecretKey);
		res.status(200).send({ msg: 'login is successful', user, token });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: 'login failed' }] });
	}
};

exports.GetUsers = async (req, res) => {
	try {
		const usersList = await UserSchema.find({ role: 'user' });
		res.status(200).send({ msg: 'list of all users', usersList });
	} catch (error) {
		res
			.status(500)
			.send({ errors: [{ msg: 'could not get the list of all users' }] });
	}
};

exports.GetUserPantry = async (req, res) => {
	try {
		const userPantry = await PantrySchema.find({ pantryId: req.params._id });
		res.status(200).send({ msg: 'pantry', userPantry });
	} catch (error) {
		res.status(500).send('Failed to get the Pantry');
	}
};
