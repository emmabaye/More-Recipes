import jwt from 'jsonwebtoken';

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
