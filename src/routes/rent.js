const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent,searchCarsavailable,getRent,updateRent,confirmRent,getRentofUser,cancelRent,deleteAll,searchDriversAvailable} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
.delete(deleteAll)
router.route("/:id")
.put(updateRent)
.delete(deleteRent)
.get(getRent)


router.route("/:id/confirm")
.get(confirmRent)

router.route("/:id/cancel")
.get(cancelRent)

router.route("/user/:id")
.get(getRentofUser)

router.route("/searchAvailable")
.post(searchCarsavailable)

router.route("/searchDriversAvailable")
.post(searchDriversAvailable)
module.exports = router