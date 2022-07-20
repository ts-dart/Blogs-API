const tokenValidator = require('../middlewares/tokenValidator');

const newPost = async ({ title, content, categoryIds }, token) => {
  const val = tokenValidator(token);
  if (!val.valid) return { status: val.status, message: val.message };
  console.log(title, content, categoryIds, token);
};

module.exports = {
  newPost,
};
