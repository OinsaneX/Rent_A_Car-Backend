const driverModelForm = require('../models/DriverForm')
const driverFormCtrl = {}

driverFormCtrl.getDriverForms = async(req,res)=>{
    
    const driverList = await driverModelForm.find()
    res.json(driverList)
}

driverFormCtrl.getDriverFormById = async(req,res)=>{
    
    const {id} = req.params
    
    const dataForm = await driverModelForm.findById(id)
    res.json(dataForm)
}

driverFormCtrl.createDriverForm = async(req,res)=>{
    const {name,email,identity,phone,nacionality,country,address,role,experience_years,license,licenseValidation,curriculum,licenseUrl} = req.body

    const newDriverForm = new driverModelForm({name,email,identity,phone,nacionality,country,address,role,curriculum,experience_years,license,licenseValidation,licenseUrl})
   await newDriverForm.save()
   .then(response=>res.json({message:response}))
   .catch(err=>res.json({message:err}))

}


module.exports = driverFormCtrl