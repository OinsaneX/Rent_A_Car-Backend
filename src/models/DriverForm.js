const {Schema , model} = require('mongoose')

const driverFormSchema = new Schema({
  
    name:{
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
   
    nacionality:{
        type:String,
        required:true
    },
  
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"driver"
    },
      deleted:{
        type:Boolean,
        default:false
      },
      experience_years:{
        type:Number,
      },
      license:{
        type:String,
      },
      licenseValidation:{
        type:Date,
      },
      licenseUrl:{
        type:String,
      },
      licenseValidation:{
        type:Date,
      },
      curriculum :{
          type:Text
      }
    })



module.exports = model("driverForm",driverFormSchema)