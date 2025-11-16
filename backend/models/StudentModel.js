import mongoose from 'mongoose'
import Counter from './CounterModel.js'
import bcrypt from 'bcrypt'

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 100,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    idNumber: {
        type: Number,
        unique: true,
    },
    address: {
        type: String,
    },
    yearLevel: {
        type: String,
        required: true,
        enum: ["First Year", "Second Year", "Third Year", "Fourth Year"]
    },
    program: {
        type: String,
        required: true,
    },
}, { timestamps: true })

// Auto-increment idNumber
studentSchema.pre("save", async function (next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { id: "studentId" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.idNumber = counter.seq;
    }

    // Hash password
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    }

    next()
})

const Student = mongoose.model("Student", studentSchema)
export default Student