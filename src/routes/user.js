const {Router} = require('express')
const router = Router()
const {getUsers,getUserById,getUserByNameAndPass,deleteUser,createUser} = require('../controllers/User')

router.route("/")
.get(getUsers)
.post(createUser)

router.route("/:id")
.get(getUserById)
.delete(deleteUser)

router.route("/login")
.post(getUserByNameAndPass)

module.exports = router