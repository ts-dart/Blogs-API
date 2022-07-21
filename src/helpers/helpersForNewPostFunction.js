const tokenValidator = require('../middlewares/tokenValidator');
const { Category, BlogPost, PostCategory } = require('../database/models');

function validator({ title, content, categoryIds }, token) {
  const val = tokenValidator(token);
  if (!val.valid) return { status: val.status, message: val.message };

  if (!title || !content || !categoryIds) {
    return { status: 400, message: 'Some required fields are missing' };
  }

  return {};
}

async function categoryVal({ categoryIds }) {
  if (categoryIds.length >= 2) {
    const valId1 = await Category.findOne({ where: { id: categoryIds[0] } });
    const valId2 = await Category.findOne({ where: { id: categoryIds[1] } });

    if (!valId1 && !valId2) return { status: 400, message: '"categoryIds" not found' };

    return { valId1, valId2 };
  }

  return { status: 400, message: '"categoryIds" not found' };
}

async function create({ title, content, categoryIds }, { valId1, valId2 }) {
  await BlogPost.create({
    title,
    content,
    userId: 1,
    published: new Date(),
    updated: new Date(),
  });

  const posts = await BlogPost.findAll();
  const postId = posts[posts.length - 1].dataValues.id;
  if (valId1) await PostCategory.create({ postId, categoryId: categoryIds[0] });
  if (valId2) await PostCategory.create({ postId, categoryId: categoryIds[1] });
  if (posts) return posts[posts.length - 1].dataValues;
}

module.exports = {
  validator,
  categoryVal,
  create,
};
