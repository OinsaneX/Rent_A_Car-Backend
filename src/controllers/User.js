const userModel = require('../models/User')
const rentModel = require('../models/Rent')
const userCtrl = {}

userCtrl.getUsers = async(req,res)=>{
    
    const userList = await userModel.find({deleted:false})
    res.json(userList)
}

userCtrl.createUser = async(req,res)=>{
    const {name,username,email,identity,phone,password,nacionality,country,address,role,pasport} = req.body

    const newUser = new userModel({name,username,email,identity,phone,password,nacionality,country,address,role,pasport})
   await newUser.save()
   .then(response=>res.json({message:response}))
   .catch(err=>res.json({message:err}))

}

userCtrl.deleteUser = async(req,res)=>{
    const id = req.params.id
    await userModel.findByIdAndUpdate(id,{deleted:true})
    await rentModel.updateMany({idUser:id},{active:false})
    res.json("delete")
}

userCtrl.getUserById = async(req,res)=>{
    const id = req.params.id

    const user = await userModel.findById(id)
    res.json(user)
}



userCtrl.getUserByNameAndPass = async(req,res)=>{
    const {username ,password} = req.body

  const userSelected = await userModel.findOne({username,password})
    res.json(userSelected)
}

module.exports = userCtrl