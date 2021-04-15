const models = require("../models");
const paginate = require("../utils/paginate")
const validateAdmin = require("../middlewares/authorization");
const PAGESIZE = 10

const usersController = {
  get: async (req, res) => {
    const user = await models.user.findByPk(req.params.id, { raw: true });
    return res.json(user);
  },
  getAll: async (req, res) => {
    let { page } = req.query
    if(!page) page = 0
    const users = await models.user.findAll(paginate({ raw: true }, { page, PAGESIZE }));
    return res.json(users);
  },
  create: async (req, res) => {
    try {
      const result = await models.user.create(req.body);
      if (!result)
        res.json({ err: "Não foi possível criar o usuário" }).status(400);
      delete result.dataValues.password;
      return res.json(result.dataValues);
    } catch (e) {
      return res.json({ err: "Não foi possível criar o usuário" }).status(400);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params
      const {...data}  = req.body;

      let user = await models.user.findByPk(id);

      return user.update({...data}).then(result => {
        res.json(result).status(200)
      }).catch(err => {
        res.json(result).status(400)
      })
    } catch (e) {
      res.json(e).status(400)
    }
  }
};

module.exports = usersController;
