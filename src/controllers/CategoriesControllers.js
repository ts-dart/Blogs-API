const CategoriesServices = require('../services/CategoriesServices');

const postCategory = async (req, res) => {
  try {
    const data = await CategoriesServices.postCategory(req.body, req.headers.authorization);
    if (data.status) return res.status(data.status).send({ message: data.message });
    console.log(data);
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

const getCategories = async (req, res) => {
  try {
    const data = await CategoriesServices.getCategories(req.headers.authorization);
    if (data.status) return res.status(data.status).send({ message: data.message });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

module.exports = {
  postCategory,
  getCategories,
};
