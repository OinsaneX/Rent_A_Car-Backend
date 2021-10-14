const {Schema , model} = require('mongoose')

const carSchema = new Schema({
    brand :{
        type: String,
        required: true
    },
    model :{
        type: String,
        required: true
    },
    registration :{
        type: String,
        required: true
    },

    price_per_day: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    qualify: {
        type: Number,
        default: 0
    },
    ports: {
        type:Number,
        default: 4
    },
    air:{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
        default:"normal"
    },
    transmission:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        default:4
    }
    },{timestamp:true})


module.exports = model("car",carSchema)