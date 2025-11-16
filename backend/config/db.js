import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/student-tracker";

const dbCOnnect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default dbCOnnect