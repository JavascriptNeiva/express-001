const router = require('express').Router()
const { create, all, get } = require('../controllers/user')

router.post('/', create)
router.get('/', all)
router.get('/:id', get)

module.exports = router
