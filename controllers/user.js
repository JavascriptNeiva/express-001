const { User } = require('../models')

const has = Object.prototype.hasOwnProperty

const create = async (req, res) => {
  try {
    let data = req.body
    if (has.call(data, 'email') && has.call(data, 'password')) {
      await User.create(data)
      return res.status(201).json({ status: 'ok', message: 'user created' })
    }
    res.status(400).json({ error: 'debes enviar los campos email y password' })
  } catch (e) {
    res.status(500).json({ status: 'failure', message: 'tenemos problemas, intenta mas tarde' })
  }
}

const all = async (req, res) => {
  try {
    let users = await User.findAll()
    res.status(200).json(users)
  } catch (e) {
    res.status(500).json({ status: 'failure', message: 'tenemos problemas, intenta mas tarde' })
  }
}

const get = async (req, res) => {
  try {
    let user = await User.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'email']
    })
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json({ status: 'failure', message: 'tenemos problemas, intenta mas tarde' })
  }
}

module.exports = {
  create,
  all,
  get
}
