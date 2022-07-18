const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const postLogin = async ({ email, password }) => {
  const validation = () => {
    const schema = Joi.object({
      email: Joi
        .string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),

      password: Joi
        .string().min(5).required(),
    });

    return schema.validate({ email, password });
  };

  if (validation().error) {
    return { status: 400, message: { message: 'Some required fields are missing' } };
  }

  const data = await User.findOne({ where: { email, password } });

  if (!data) return { status: 400, message: { message: 'Invalid fields' } };

  const token = jwt.sign({ email }, process.env.JWT_SECRET, null, null);
  return { token };
};

module.exports = {
  postLogin,
};
