// const Joi = require('joi');
// const tokenValidator = require('../middlewares/tokenValidator');
const Helpers = require('../helpers/helpersForNewPostFunction');

const newPost = async (body, token) => {
  const vl = await Helpers.validator(body, token);
  if (vl.status) return vl;

  const vl2 = await Helpers.categoryVal(body);
  if (vl2.status) return vl2;

  return Helpers.create(body, vl2);
};

module.exports = {
  newPost,
};
