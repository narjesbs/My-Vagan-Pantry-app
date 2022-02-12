const RecipeSchema = require('../Models/Recipe');

exports.AllRecipes = async (req, res) => {
	try {
		const recipesList = await RecipeSchema.find();
		res.status(200).send({ msg: 'list of All Recipes', recipesList  });
	} catch (error) {
		res
			.status(500)
			.send({ errors: [{ msg: 'Failed to get the list of All Recipes' }] });
	}
};

exports.AddRecipe = async (req, res) => {
	const { name } = req.body;
	try {
		const newRecipe = new RecipeSchema(req.body);
		const found = await RecipeSchema.findOne({ name });
		if (found) {
			return res.status(400).send('Recipe already exist!');
		}
		await newRecipe.save();
		res.status(200).send({ msg: 'Recipe is added', newRecipe });
	} catch (error) {
		res.status(500).send({ errors: [{ msg: 'Failed to add the Recipe' }] });
	}
};

exports.GetRecipe = async (req, res) => {
	const { id } = req.params;
	try {
		const findRecipe = await RecipeSchema.findById(id);
		res.status(200).send({ msg: 'Recipe is found', findRecipe });
	} catch (error) {
		res.status(500).send('Failed to get the Recipe');
	}
};

exports.UpdateRecipe = async (req, res) => {
	const { id } = req.params;
	try {
		const updateRecipe = await RecipeSchema.findByIdAndUpdate(id, {
			$set: { ...req.body },
		});
		res.status(200).send({ msg: 'Recipe is updated', updateRecipe });
	} catch (error) {
		res.status(500).send('Failed to update the Recipe');
	}
};

exports.DeleteRecipe = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteRecipe = await RecipeSchema.findByIdAndDelete(id);
		res.status(200).send({ msg: 'Recipe is deleted', deleteRecipe });
	} catch (error) {
		res.status(500).send('Failed to delete the Recipe');
	}
};
