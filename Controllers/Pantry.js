const PantrySchema = require('../Models/Pantry');

exports.AllPantryItems = async (req, res) => {
	try {
		const pantryItems = await PantrySchema.find();
		res.status(200).send({ msg: 'list of All Pantries', pantryItems });
	} catch (error) {
		res.status(500).send({
			errors: [{ msg: 'Failed to get the list of All Pantry Items' }],
		});
	}
};

exports.AddPantry = async (req, res) => {
	try {
		const newPantry = new PantrySchema(req.body);
		await newPantry.save();
		res.status(200).send({ msg: 'Pantry is added', newPantry });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: 'Failed to add the Pantry' }] });
	}
};

exports.GetPantry = async (req, res) => {
	const { id } = req.params;
	try {
		const findPantry = await PantrySchema.findById(id);
		res.status(200).send({ msg: 'Pantry is found', findPantry });
	} catch (error) {
		res.status(500).send('Failed to get the Pantry');
	}
};

exports.UpdatePantry = async (req, res) => {
	const { id } = req.params;
	try {
		const updatePantry = await PantrySchema.findByIdAndUpdate(id, {
			$set: { ...req.body },
		});
		res.status(200).send({ msg: 'Pantry is updated', updatePantry });
	} catch (error) {
		res.status(500).send('Failed to update the Pantry');
	}
};

exports.DeletePantry = async (req, res) => {
	const { id } = req.params;
	try {
		const deletePantry = await PantrySchema.findByIdAndDelete(id);
		res.status(200).send({ msg: 'Pantry is deleted', deletePantry });
	} catch (error) {
		res.status(500).send('Failed to delete the Pantry');
	}
};


