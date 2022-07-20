const PostServices = require('../services/PostServices');

const newPost = async (req, res) => {
  try {
    const data = await PostServices.newPost(req.body, req.headers.authorization);
    if (data.status) return res.status(data.status).send(data.message);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

module.exports = {
  newPost,
};
