import Model from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = Model.User;
const Recipe = Model.Recipe;

class UserController {
  static postSignUp(req, res) {
  	const hash = bcrypt.hashSync(req.body.password, 7);
  	User.findOne({ where: { email: req.body.email.trim().toLowerCase() } })
  	.then((existingUser) => {
  		if (existingUser) {
  			return res.status(409).json({ error: 'This Email has already been used' });
  		}

  		 User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          sex: req.body.sex,
          address: req.body.address,
          occupation: req.body.occupation,
          interests: req.body.interests,
        }).then(() => {
          User.findOrCreate({ where: { email: req.body.email } })
            .then((user) => {
              const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });
              res.status(200).json({ auth: true, token });
            });
        })
          .catch(err => res.status(200).json({ error: 'User was not created' }));
  	});
  }


  static postSignIn(req, res) {
  	User.findOne({ where: { email: req.body.email } })
  	.then((user) => {
  		const validPassword = bcrypt.compareSync(req.body.password, user.password);
  		if (!validPassword) {
  			return res.status(401).send({ auth: false, token: null });
  		}
  		const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });

  		return res.status(200).send({ auth: true, token });
  	});
  }


  static getFavoriteRecipes(req, res) {
  	User.findOne({
  		id: req.params.userId,
  	}).then((user) => {
  		if (!user) {
  			return res.status(404).json({ error: 'User not found' });
  		}

  		return res.status(200).send(user.favoriteRecipes);
  	});
  }

  static getUserRecipes(req, res) {
  	Recipe.findAll({
  		where: {
  			creatorId: req.params.userId,
  		},

  	}).then((recipes) => {
  		if (!recipes) {
  			return res.status(404).json({ error: 'Recipes not found' });
  		}

  		return res.status(200).send(recipes);
  	});
  }

  // GET: Get details of a user by id
  static getUserDetails(req, res) {
  	return User.findById(req.params.userId)
  	.then((user) => {
  		if (!user) {
  			res.status(404).json({ error: 'User not found' });
  		}
  		user.password = 'Access Denied';
  		res.status(200).json({ status: 'success', data: user });
  	});
  }
}

export default UserController;
