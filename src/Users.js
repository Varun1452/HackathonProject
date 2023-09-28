const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("Collection_1",UserSchema)
module.exports=UserModel