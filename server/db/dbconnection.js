const mongoose=require("mongoose")

const DbConnection=async()=>{
    let connection=mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected successfully"))
        .catch((error)=> console.log("Failed to connect to MongoDB:", error.message))
}

module.exports=DbConnection