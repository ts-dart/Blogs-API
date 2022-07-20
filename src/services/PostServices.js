// const Joi = require('joi');
// const tokenValidator = require('../middlewares/tokenValidator');
// const { Category } = require('../database/models');
// const { BlogPost } = require('../database/models');
//
// const newPost = async ({ title, content, categoryIds }, token) => {
//   const val = tokenValidator(token);
//   if (!val.valid) return { status: val.status, message: val.message };
//
//   if (!title || !content || !categoryIds) {
//     return { status: 400, message: 'Some required fields are missing' };
//   }
//
//   const valId1 = await Category.findOne({ where: { id: categoryIds[0] } });
//   const valId2 = await Category.findOne({ where: { id: categoryIds[1] } });
//   if (!valId1 && !valId2) return { status: 400, message: '"categoryIds" not found' };
//
//   const data = await BlogPost.create({
//     title,
//     content,
//     userId: 1,
//     published: new Date(),
//     updated: new Date(),
//   });
//
//   if (data) return data;
// };
const newPost = async () => 0;
module.exports = {
  newPost,
};
