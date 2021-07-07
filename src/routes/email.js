const {Router} = require("express")
const router = Router()
const {sendTestEmail} = require("../controllers/email")

router.route("/")
.post(sendTestEmail)

module.exports = router