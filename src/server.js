const { app } = require(".");
const connectDB = require("./config/db.js");


const port=5454

app.listen(port,async()=>{
    await connectDB()
    console.log("Server is running on port",port);
})
