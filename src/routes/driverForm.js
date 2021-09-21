const {Router} = require('express')
const router = Router()
const {getDriverForms,createDriverForm,getDriverFormById} = require('../controllers/DriverForm')

router.route("/")
.get(getDriverForms)
.post(createDriverForm)
router.route("/:id")
.get(getDriverFormById)

module.exports = router