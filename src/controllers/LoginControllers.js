const LoginServices = require('../services/LoginServices');

const postLogin = async (req, res) => {
  try {
    const data = await LoginServices.postLogin(req.body);
    if (data.status) return res.status(data.status).send(data.message);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

module.exports = {
  postLogin,
};
