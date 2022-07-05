const User = require("../models/User");

const bcrypt = require("bcrypt");

module.exports = {
  async readUser(req, res) {
    const { email } = req.query;

    const user = await User.findOne({ email: email });

    return res.json(user);
  },

  async addScore(req, res) {
    const { score, email } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      await User.updateOne({ email: email }, { $push: { scores: score } });
    }

    return res.json(user);
  },

  async updatePicture(req, res) {
    const { user, picture } = req.body;

    if (await User.findOne({ email: user.email })) {
      await User.updateOne({ email: user.email }, { ...user, picture: picture });
    }

    return res.json(user);
  },

  async createUser(req, res) {
    const user = req.body;

    if (await User.findOne({ email: user.email })) return res.status(400).send({ error: "E-mail already exists." });

    await User.create(user);
    return res.json(user);
  },

  async authUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select("+password");

    if (!user) return res.status(400).send({ error: "Are you sure about this e-mail?" });

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Incorrect password." });
    }

    return res.json(user);
  },
};
