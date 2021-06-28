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
    }


})


module.exports = model("car",carSchema)