const rentModel = require('../models/Rent')
const carModel = require('../models/Car')
const userModel = require('../models/User')
const rentCtrlr = {}

rentCtrlr.getRents = async (req,res) =>{
   var rentList = await rentModel.find()
   res.json(rentList)
}

rentCtrlr.deleteAll = async (req,res) =>{
    await rentModel.deleteMany()
    res.json("clear")
}

rentCtrlr.createRent = async (req,res) =>{
    const {idUser,pickUp,location,dropOff,pickHour,dropHour} = req.body
    const days = (new Date(dropOff).getTime() - new Date(pickUp).getTime()) / (1000 * 60 * 60 * 24)
    const newRent = new rentModel({
        idUser,pickUp,dropOff,location,days,pickHour,dropHour
    })

    await newRent.save()
    .then((response) => res.json(response))
    .catch((err) =>res.json({err}))
}

rentCtrlr.updateRent = async (req,res) =>{
    const {id} = req.params
    const {idCar,price,idUser,imageCar,user_name} = req.body

    const newRent = {
        idUser,
        idCar,
        price,
        imageCar,
        user_name
        
    }

        await rentModel.findByIdAndUpdate(id, newRent)
        .then((response) => res.json("yep"))
        .catch((err) => res.json("no"))


}

rentCtrlr.confirmRent = async(req,res) => {

    const {id}= req.params

    await rentModel.findByIdAndUpdate(id,{confirmed:true})
    res.json("updated")
}

rentCtrlr.cancelRent = async(req,res) => {

    const {id}= req.params

    await rentModel.findByIdAndUpdate(id,{cancelated:true})
    res.json("updated")
}


rentCtrlr.getRent = async (req,res)=>{
    const {id} = req.params
    const rent = await rentModel.findById(id)
    res.json(rent)
}


rentCtrlr.deleteRent = async (req,res) =>{
    const id = req.params.id

    await rentModel.findByIdAndDelete(id)
    .then(() =>res.json("deleted"))

}
rentCtrlr.searchCarsavailable = async (req,res) =>{
    const {pickUp,dropOff} = req.body
    const cars =await carModel.find()
    const rents =await rentModel.find()
    const listAvailable = []
    cars.forEach(car => {
        var available = true
        rents.forEach(rent => {
            if(rent.idCar==car._id && !rent.cancelated && rent.active){
                if(new Date(rent.pickUp).getTime()<=new Date(pickUp).getTime() && new Date(rent.dropOff).getTime()>=new Date(dropOff).getTime()){
                    available = false
                }
                else if(new Date(pickUp).getTime()>=new Date(rent.pickUp).getTime()&&new Date(pickUp).getTime()<= new Date(rent.dropOff).getTime()) {
                    available = false
                } 
                else if(new Date(dropOff).getTime()>=new Date(rent.pickUp).getTime()&&new Date(pickUp).getTime()<= new Date(rent.dropOff).getTime()) {
                    available = false
                } 
            
            }
           
        })
        if(available){
        listAvailable.push(car)
        }
    })
    res.json(listAvailable)
    

}
rentCtrlr.searchDriversAvailable = async (req,res) =>{
    const {pickUp,dropOff} = req.body
    const drivers =await userModel.find({role:'driver'})
    const rents =await rentModel.find()
    const driversAvailable = []
    drivers.forEach(driver => {
        var available = true
        rents.forEach(rent => {
            if(rent.driver_Id==driver._id && !rent.cancelated && rent.active){
                if(new Date(rent.pickUp).getTime()<=new Date(pickUp).getTime() && new Date(rent.dropOff).getTime()>=new Date(dropOff).getTime()){
                    available = false
                }
                else if(new Date(pickUp).getTime()>=new Date(rent.pickUp).getTime()&&new Date(pickUp).getTime()<= new Date(rent.dropOff).getTime()) {
                    available = false
                } 
                else if(new Date(dropOff).getTime()>=new Date(rent.pickUp).getTime()&&new Date(pickUp).getTime()<= new Date(rent.dropOff).getTime()) {
                    available = false
                } 
            
            }
           
        })
        if(available){
            driversAvailable.push(driver)
        }
    })
    res.json(driversAvailable[0])
    

}

rentCtrlr.getRentofUser = async (req,res)=>{
    const {id} = req.params
    const rent = await rentModel.find({idUser:id})
    res.json(rent)
}


module.exports = rentCtrlr