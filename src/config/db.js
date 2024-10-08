const  mongoose  = require("mongoose")

const mongodbUrl= "mongodb+srv://archanaop27:zlOxVsMRQcA7z6NI@cluster0.b9awp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports = connectDB