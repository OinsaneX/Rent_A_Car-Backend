const {Router} = require('express')
const router = Router()
const {getDrivers,createDriver} = require('../controllers/Driver')

router.route("/")
.get(getDrivers)
.post(createDriver)


module.exports = router