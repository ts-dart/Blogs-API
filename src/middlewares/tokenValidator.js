const jwt = require('jsonwebtoken');

const tokenValidator = (token) => {
  if (!token) return { status: 401, message: 'Token not found', valid: false };

  try {
    jwt.verify(token, process.env.JWT_SECRET, null, null);
  } catch (err) {
    return { status: 401, message: 'Expired or invalid token', valid: false };
  }

  return { valid: true };
};

module.exports = tokenValidator;
