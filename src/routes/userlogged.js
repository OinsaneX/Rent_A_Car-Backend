const {Router} = require('express')
const router = Router()
const {addUser,getUserByToken,getUsersLogged,deleteUserLogged} = require('../controllers/UserLogged')

router.route("/")
.post(addUser)
.get(getUsersLogged)

router.route("/:id")
.delete(deleteUserLogged)
router.route("/:token")
.get(getUserByToken)


module.exports = router