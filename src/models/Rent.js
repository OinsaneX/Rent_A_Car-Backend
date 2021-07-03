const {Schema , model} = require('mongoose')

const rentSchema = new Schema({
  
  idCar:{
      type:String,
      required:true
  },
  idUser:{
      type:String,
      required:true
  },
  pickUp:{
      type:Date,
      required:true
  },
  dropOff:{
      type:Date,
      required:true
  },
  price:{
      type:Number,
      required:true
  }
  
},{timestamp:true})


module.exports = model("rent",rentSchema)