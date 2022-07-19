const Joi = require('joi');
const jwt = require('jsonwebtoken');
const tokenValidator = require('../middlewares/tokenValidator');
const { User } = require('../database/models');

const postUser = async ({ displayName, email, password, image }) => {
  const joi = () => {
    const schema = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate({ displayName, email, password });
  };

  if (joi().error) return { status: 400, message: joi().error.details[0].message };

  const user = await User.findOne({ where: { email } });
  if (user) return { status: 409, message: 'User already registered' };

  if (await User.create({ displayName, email, password, image })) {
    return { token: jwt.sign({ email }, process.env.JWT_SECRET, null, null) };
  }
};

const getUsers = async (token) => {
  const val = tokenValidator(token);
  if (!val.valid) return { status: val.status, message: val.message };

  const users = await User.findAll();
  return users.map((u) => u.dataValues).map((u) => {
    const user = u;
    delete user.password;
    return user;
  });
};

const getUserById = async (id, token) => {
  const val = tokenValidator(token);
  if (!val.valid) return { status: val.status, message: val.message };

  const user = await User.findOne({ where: { id } });
  if (!user) return { status: 404, message: 'User does not exist' };

  delete user.dataValues.password;
  return user.dataValues;
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
};
