const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const sessionController = {
  userAuth: async (req, res, next) => {
    try {
      const { email, password } = req.body

      const data = await models.user.unscoped().findOne({ where: { email }})

      let user = data.dataValues

      const validPassword = await bcrypt.compare(password, user.password)

      if(validPassword){
        delete user.password

        const token = jwt.sign({
          ...user
        }, process.env.SECRET, {expiresIn: '100d'})
        res.json({
          ...user,
          token
        })
      } else {
        res.json({err: 'Email ou senha inválidos' }).status(401)
      }
    } catch {
      res.json({err: 'Email ou senha inválidos' }).status(401)
    }
  }
}

module.exports = sessionController