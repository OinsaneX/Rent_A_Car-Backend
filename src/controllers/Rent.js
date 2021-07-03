const rentModel = require('../models/Rent')
const rentCtrlr = {}

rentCtrlr.getRents = async (req,res) =>{
   var rentList = await rentModel.find()
   res.json(rentList)
}

rentCtrlr.createRent = async (req,res) =>{
    const {idCard,idUser,pickUp,dropOff,price} = req.body

    const newRent = new rentModel({
        idCard,idUser,pickUp,dropOff,price
    })

    await rentModel.save()
    .then((response) => res.json({message:response}))
    .catch((err) =>res.json({message:err}))
}

rentCtrlr.deleteRent = async (req,res) =>{
    const id = req.params.id

    await rentModel.findByIdAndDelete(id)

}


module.exports = rentCtrlr