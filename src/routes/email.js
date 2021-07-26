const {Router} = require("express")
const router = Router()
const {sendTestEmail,sendEmailConfirm} = require("../controllers/email")

router.route("/")
.post(sendTestEmail)
router.route("/confirm")
.post(sendEmailConfirm)

module.exports = router