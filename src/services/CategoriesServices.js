const Joi = require('joi');
const tokenValidator = require('../middlewares/tokenValidator');
const { Category } = require('../database/models');

const postCategory = async ({ name }, token) => {
  const val = tokenValidator(token);
  if (!val.valid) return { status: val.status, message: val.message };

  const schema = Joi.object({ name: Joi.string().required() });
  if (!schema.validate({ name }).value.name) {
    return { status: 400, message: '"name" is required' };
  }

  const createdCategory = await Category.create({ name });
  if (createdCategory) return createdCategory.dataValues;
};

module.exports = {
  postCategory,
};
