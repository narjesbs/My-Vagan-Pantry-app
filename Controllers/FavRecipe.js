const UserSchema = require('../Models/auth');

exports.Favorite = async (req, res) => {
	const { id } = req.params;
	try {
		const favRecipe = await UserSchema.findById(id);
		if (!favRecipe.likes.includes(req.body.recipeId)) {
			await favRecipe.updateOne({ $push: { likes: req.body.recipeId } });
			res.status(200).send({ msg: 'the Recipe has been liked' });
		} else {
			await favRecipe.updateOne({ $pull: { likes: req.body.recipeId } });
			res.status(200).send({ msg: 'the Recipe has been disliked' });
		}
	} catch (error) {
		res.status(500).send({ errors: [{ msg: 'Failed to like the Recipe' }] });
	}
};

//get user's all favorites

exports.allFavorites = async (req, res) => {
	try {
		const favorites = await UserSchema.find({
			recipeId: req.recipe._id,
		}).populate('recipeId');
		res.status(200).send({ msg: 'user favorites', favorites });
	} catch (err) {
		res.status(500).send({ errors: [{ msg: 'Failed to get user favorites' }] });
	}
};
