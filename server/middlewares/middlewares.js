import jwt from 'jsonwebtoken';
import validator from 'validator';

export const isLoggedIn = (req, res, next) => {
  const token = req.headers['x-access-token'];

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'User is not logged in' });
    }
    console.log("DECODED ", decoded);
    req.userId = decoded.id;
     return next();
  });

};

export const checkSignUpDetails = (req, res, next) => {
		if(req.body.email == undefined){
  			return res.status(400).send({error: "Email is required"});
  		}

		if(!validator.isEmail(req.body.email.toString())){
  			return res.status(400).send({error: "Valid email required"});
  		}

  		if(req.body.name == undefined){
  			return res.status(400).send({error: "Name is required"});
  		}

  		if(req.body.name == ''){
  			return res.status(400).send({error: "Name cannot be empty"});
  		}

  		if(req.body.name.length <= 4){
  			return res.status(400).send({message: "Length of name should be greater than 4 characters"});
  		}

  		if(req.body.password == undefined){
  			return res.status(400).send({error: "Valid password required"});
  		}

  		if(req.body.password.length <= 6){
  			return res.status(400).send({message: "Password must exceed 6 characters"});
  		}

  		return next();
}


export const checkSignInDetails = (req, res, next) => {
		if(req.body.email == undefined){
  			return res.status(400).send({error: "Email is required"});
  		}

		if(!validator.isEmail(req.body.email.toString())){
  			return res.status(400).send({error: "Valid email required"});
  		}

  		if(req.body.password == undefined){
  			return res.status(400).send({error: "Valid password required"});
  		}

  		if(req.body.password.length <= 6){
  			return res.status(400).send({message: "Password must exceed 6 characters"});
  		}

  		return next();
}
