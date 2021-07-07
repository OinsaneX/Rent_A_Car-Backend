const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent,searchCarsavailable,getRent} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
router.route("/:id")
.delete(deleteRent)
.get(getRent)

router.route("/searchAvailable")
.post(searchCarsavailable)

module.exports = router