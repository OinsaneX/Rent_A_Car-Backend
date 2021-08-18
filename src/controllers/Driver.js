const driverModel = require('../models/Driver')
const driverCtrl = {}

driverCtrl.getDrivers = async(req,res)=>{
    
    const driverList = await driverModel.find()
    res.json(driverList)
}

driverCtrl.createDriver = async(req,res)=>{
    const {name,email,identity,phone,password,nacionality,country,address,role,pasport,experience_years,license,licenseValidation} = req.body

    const newDriver = new userModel({name,username,email,identity,phone,password,nacionality,country,address,role,pasport,experience_years,license,licenseValidation})
   await newDriver.save()
   .then(response=>res.json({message:response}))
   .catch(err=>res.json({message:err}))

}


module.exports = driverCtrl