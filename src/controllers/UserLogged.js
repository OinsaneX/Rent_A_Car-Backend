var TokenGenerator = require( 'token-generator' )({
    salt: 'your secret ingredient for this magic recipe',
    timestampMap: 'abcdefghij',
});

const userLoggedModel = require("../models/UserLogged")

const userLoggedCtrl = {}

userLoggedCtrl.addUser = async(req,res)=>{
    const {name,username,email,identity,phone,password,nacionality,country,address,role} = req.body
    const token = TokenGenerator.generate()
    const newUser = new userLoggedModel({name,username,email,identity,phone,password,nacionality,country,address,role,token})

    await newUser.save()
    .then((response) => res.json({token}))
    .catch((err) =>res.json(err))
}

userLoggedCtrl.getUserByToken= async(req,res) =>{
    const token = req.params.token

    await userLoggedModel.findOne({token})
    .then((response) => res.json(response))
    .catch((err) =>res.json(err))
}

userLoggedCtrl.getUsersLogged = async(req,res) =>{
    const userLoggedList = await userLoggedModel.find()

    res.json(userLoggedList)
}

module.exports = userLoggedCtrl