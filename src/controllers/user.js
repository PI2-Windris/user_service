const models = require("../models");
const validateAdmin = require("../utils/validateAdmin");

const usersController = {
  get: async (req, res) => {
    const user = await models.user.findByPk(req.params.id, { raw: true });
    return res.json(user);
  },
  getAll: async (req, res) => {
    const validAdmin = await validateAdmin(req);
    if (!validAdmin) return res.json({ err: "Não autorizado" }).status(401);
    const users = await models.user.findAll({ raw: true });
    return res.json(users);
  },
  create: async (req, res) => {
    try {
      const validAdmin = await validateAdmin(req);
      if (!validAdmin) return res.json({ err: "Não autorizado" }).status(401);

      const result = await models.user.create(req.body);
      if (!result)
        res.json({ err: "Não foi possível criar o usuário" }).status(400);
      delete result.dataValues.password;
      return res.json(result.dataValues);
    } catch (e) {
      return res.json({ err: "Não foi possível criar o usuário" }).status(400);
    }
  },
};

module.exports = usersController;
