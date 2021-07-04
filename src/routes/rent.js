const {Router} = require('express')
const router = Router()
const {getRents,deleteRent,createRent,searchCarsavailable} = require('../controllers/Rent')

router.route("/")
.get(getRents)
.post(createRent)
router.route("/:id")
.delete(deleteRent)

router.route("/searchAvailable")
.post(searchCarsavailable)

module.exports = router