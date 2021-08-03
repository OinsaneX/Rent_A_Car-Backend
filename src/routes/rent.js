const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent,searchCarsavailable,getRent,updateRent,confirmRent,getRentofUser,cancelRent,deleteAll} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
router.route("/:id")
.put(updateRent)
.delete(deleteRent)
.get(getRent)

router.route("/deleteAll")
.get(deleteAll)

router.route("/:id/confirm")
.get(confirmRent)

router.route("/:id/cancel")
.get(cancelRent)

router.route("/user/:id")
.get(getRentofUser)

router.route("/searchAvailable")
.post(searchCarsavailable)

module.exports = router