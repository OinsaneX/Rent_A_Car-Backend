const {Schema , model} = require('mongoose')

const rentSchema = new Schema({
  
  idCar:{
      type:String,
  },
  imageCar:{
      type:String,
  },
  idUser:{
      type:String,
  },
  pickUp:{
      type:Date,
      required:true
  },
  location:{
    type:String,
    required:true
  },
  dropOff:{
      type:Date,
      required:true
  },
  price:{
      type:Number,
  },
  days:{
      type:Number,

  },
  pickHour:{
    type:Number,
  },
  dropHour:{
    type:Number,
  },
  confirmed:{
      type:Boolean,
      default:false
  },
  cancelated:{
      type:Boolean,
      default:false
  },
  active:{
    type:Boolean,
    default:true
  },
   user_name:{
    type:String,
  },


  
},{timestamp:true})


module.exports = model("rent",rentSchema)