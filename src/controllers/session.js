const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const sessionController = {
  userAuth: async (req, res) => {
    try {
      const { email, password } = req.body;

      const data = await models.user.unscoped().findOne({ where: { email } });

      const user = data.dataValues;

      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        delete user.password;

        const token = jwt.sign(
          {
            ...user,
          },
          process.env.SECRET,
          { expiresIn: "100d" }
        );
        res.json({
          ...user,
          token,
        });
      } else {
        res.json({ err: "Email ou senha inválidos" }).status(401);
      }
    } catch (e) {
      res.json({ err: "Email ou senha inválidos" }).status(401);
    }
  },
};

module.exports = sessionController;
