const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent,searchCarsavailable,getRent,updateRent,confirmRent} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
router.route("/:id")
.put(updateRent)
.delete(deleteRent)
.get(getRent)

router.route("/:id/confirm")
.get(confirmRent)

router.route("/searchAvailable")
.post(searchCarsavailable)

module.exports = router