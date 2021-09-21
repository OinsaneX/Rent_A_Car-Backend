const {Router} = require('express')
const router = Router()
const {getDriverForms,createDriverForm,getDriverFormById,deleteDriverFormById} = require('../controllers/DriverForm')

router.route("/")
.get(getDriverForms)
.post(createDriverForm)
router.route("/:id")
.get(getDriverFormById)
.delete(deleteDriverFormById)

module.exports = router