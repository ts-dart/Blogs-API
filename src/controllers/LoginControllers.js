const LoginServices = require('../services/LoginServices');

const postLogin = async (req, res) => {
  const data = await LoginServices.postLogin(req.body);

   if (data.status) return res.status(data.status).send(data.message);
  return res.status(200).send(data);
};

module.exports = {
  postLogin,
};
