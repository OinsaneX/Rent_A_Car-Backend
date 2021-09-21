const {Router} = require("express")
const router = Router()
const {sendTestEmail,sendEmailConfirm,sendEmailWorkCanceled,sendEmailWorkConfirmed} = require("../controllers/email")

router.route("/")
.post(sendTestEmail)
router.route("/confirm")
.post(sendEmailConfirm)
router.route("/sendEmailWorkConfirmed")
.post(sendEmailWorkConfirmed)
router.route("/sendEmailWorkCanceled")
.post(sendEmailWorkCanceled)
module.exports = router