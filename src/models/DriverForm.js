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
        type:String,
      },
      licenseUrl:{
        type:String,
      },
      
      curriculum :{
          type:String
      },
      deleted:{
        type:Boolean,
        default:false,
      },idUser:{
        type:String,
        required:true,
      }
    },
    {timestamps:true})



module.exports = model("driverForm",driverFormSchema)