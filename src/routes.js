const { Router } = require('express')

const UserController = require('./controller/UserController')

const router = Router()

router.post('/user-create', UserController.craeteUser)
router.put('/user-update/:email', UserController.updateUser)
router.get('/user-list', UserController.listUsers)
router.get('/user-find/:email', UserController.findUser)
router.delete('/user-delete/:email', UserController.deleteUser)

module.exports = router