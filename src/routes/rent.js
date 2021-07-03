const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
router.route("/:id")
.delete(deleteRent)

module.exports = router