const UserServices = require('../services/UserServices');

const postUser = async (req, res) => {
  try {
    const data = await UserServices.postUser(req.body);
    if (data.status) return res.status(data.status).send({ message: data.message });
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await UserServices.getUsers(req.headers.authorization);
    if (data.status) return res.status(data.status).send({ message: data.message });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

const getUserById = async (req, res) => {
  try {
    const data = await UserServices.getUserById(req.params.id, req.headers.authorization);
    if (data.status) return res.status(data.status).send({ message: data.message });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
};
