const carModel = require("../models/Car")
const carController = {}

carController.getCars = async(req, res) =>{
 
const carList = await carModel.find()
console.log(carList)
res.json(carList)
}

carController.addCar = async(req, res) =>{

    const {brand,model, description,price_per_day,imageUrl,qualify,ports,air,type,transmission,capacity} = req.body

    const newCar = new carModel({
        brand,
        model,
        description,
        price_per_day,
        imageUrl,
        qualify,
        ports,
        air,
        type,
        transmission,
        capacity
    })
    console.log(newCar)
    await newCar.save()
    .then(()=>{
        res.json({isOk: true})
    })
    .catch((err)=>{
        res.json({isOk:false})
    })
}

carController.getCar = async(req, res) =>{
    const id = req.params.id

    const car =await carModel.findById(id)
    
    res.json(car)
}

carController.deleteCar = async(req, res) =>{
    const id = req.params.id

    await carModel.findByIdAndDelete(id)
    
    res.json({isOk:true})

}

carController.updateCar = async(req, res) =>{
    const id = req.params.id
    const {brand, model, description,price_per_day,imageUrl,ports,air,type,transmission,capacity} = req.body

    const newCar = new carModel({_id:id,brand, model, description, price_per_day, imageUrl,ports,air,type,transmission,capacity})
    await carModel.findByIdAndUpdate(id,newCar)

    res.json({isOk:true})
}

module.exports = carController