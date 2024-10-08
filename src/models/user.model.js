const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: String,
    email:String,
    password:String,
    role: {
        type:String,
        enum:["Role_Customer", "Role_Restaurant_Owner"],
        default:"Role_Customer",
    },
    orders: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
    favorites: [{name: String, description:String,images: []}],
    addresses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Address",
        },
    ],
});
const User = mongoose.model("User",UserSchema)
module.exports=User;