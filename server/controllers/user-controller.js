import Model from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = Model.User;
console.log(User);

class UserController {
  static postSignUp(req, res) {
  	User.findOne({ where: { email: req.body.email } })
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
            .spread(((user) => {
              console.log('CREATED USER ', user);
              const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: 86400 });
              res.status(200).json({ auth: true, token });
            }));
        })
          .catch(err => res.status(200).json({ error: 'User was not created' }));
  	});

    const hash = bcrypt.hashSync(req.body.password, 7);
  }

  static postSignIn(req, res) {
  	User.findOne({ where: { email: req.body.email } })
  	.then((user) => {
  		const validPassword = bcrypt.compareSync(req.body.password, user.password);
  		if (!validPassword) {
  			return res.status(401).send({ auth: false, token: null });
  		}
  		const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: 86400 });

  		return res.status(200).send({ auth: true, token });
  	});
  }
}

export default UserController;
