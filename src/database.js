const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://AvDev:ScdlDenWGs1zWfrh@main.24dkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false,
}
);

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("Database is connected")
})