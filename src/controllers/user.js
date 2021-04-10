const models = require('../models')

const usersController = {
  get: async (req, res, next) => {
    const user = await models.user.findByPk(req.params.id, { raw: true})
    res.json(user)
  },
  getAll: async (req, res, next) => {
    const users = await models.user.findAll({ raw: true })
    res.json(users)
  },
  create: async (req, res, next) => {
    try {
      let result = await models.user.create(req.body)
      if (!result) res.json({err: 'Não foi possível criar o usuário'}).status(400)
      delete result.dataValues.password
      res.json(result.dataValues)
    } catch {
      res.json({err: 'Não foi possível criar o usuário'}).status(400)
    }
  }
}

module.exports = usersController;