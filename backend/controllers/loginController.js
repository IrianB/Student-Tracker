import Student from "../models/StudentModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerStudent = async (req, res) => {
    try {

        const {
            firstName,
            middleName,
            lastName,
            age,
            gender,
            username,
            password,
            address,
            yearLevel,
            program
        } = req.body

        if (!firstName || !lastName || !age
            || !gender || !username || !password
            || !yearLevel || !program
        ) { return res.status(400).json({ message: "Input fields required" }) }

        const existingStudent = await Student.findOne({ firstName, lastName })

        if (existingStudent) { return res.status(401).json({ message: "Existing user" }) }

        const newStudent = new Student({
            firstName,
            middleName,
            lastName,
            age,
            gender,
            username,
            password,
            address,
            yearLevel,
            program
        })
        await newStudent.save()
        const response = await Student.findOne({ firstName, lastName })
        res.status(200).json({ student: newStudent, idNumber: response.idNumber })
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const loginStudent = async (req, res) => {
    try {
        const { idNumber, password } = req.body
        const response = await Student.findOne({ idNumber: idNumber })

        if (!response) {
            return res.status(404).json({ message: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, response.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Password" })
        }

        // generate token
        const token = jwt.sign({ id: response._id }, "jwt_secret", { expiresIn: "1h" });

        res.status(200).json({ student: response, token: token })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

