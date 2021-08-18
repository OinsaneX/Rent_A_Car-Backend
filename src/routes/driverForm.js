const {Router} = require('express')
const router = Router()
const {getDriverForms,createDriverForm} = require('../controllers/DriverForm')

router.route("/")
.get(getDriverForms)
.post(createDriverForm)


module.exports = router