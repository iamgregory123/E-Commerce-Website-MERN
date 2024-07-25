// connect database
var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Gregory:Kunnamkulam123@cluster0.yiubpfy.mongodb.net/ICT-PROJECT?retryWrites=true&w=majority&appName=Cluster0")

    .then(()=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error)
    })