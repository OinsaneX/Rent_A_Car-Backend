const {Schema , model} = require('mongoose')

const userLoggedSchema = new Schema({
  
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    identity:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nacionality:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"client"
    }
    },{timestamps:true},)

    userLoggedSchema.index({createdAt: 1},{expireAfterSeconds: 6000})


module.exports = model("userLogged",userLoggedSchema)