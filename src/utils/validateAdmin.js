const jwt = require("jsonwebtoken");
const models = require("../models");

const validateAdmin = async (req) => {
  try {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token.split(" ")[1], process.env.SECRET);

    if (!decoded) throw new Error("Token inválido");

    const user = await models.user.findByPk(decoded.id, { raw: true });

    if (!user) throw new Error("Usuário não encontrado");

    if (user.isadmin) return true;

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = validateAdmin;
