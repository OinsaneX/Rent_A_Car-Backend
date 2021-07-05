const {Router} = require('express')
const router = Router()
const {addUser,getUserByToken,getUsersLogged} = require('../controllers/UserLogged')

router.route("/")
.post(addUser)
.get(getUsersLogged)

router.route("/:token")
.get(getUserByToken)


module.exports = router