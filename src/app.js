const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
require('./database')
//Settings
app.set("port",4000)

//MidleWares
app.use(cors())
app.use(express.json())

//Routes
app.use("/car",require('./routes/car'))
app.use("/rent",require('./routes/rent'))
app.use("/user",require('./routes/user'))
app.use("/userlogged",require('./routes/userlogged'))
app.use("/sendMail",require('./routes/email'))
module.exports = http