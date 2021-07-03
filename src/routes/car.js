const {Router} = require("express")
const router = Router();
const {getCars,addCar,deleteCar,updateCar,getCar} = require("../controllers/Car")

router.route("/")
.get(getCars).post(addCar)

router.route("/:id")
.get(getCar).put(updateCar).delete(deleteCar)
module.exports = router;