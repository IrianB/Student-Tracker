import Student from "../models/StudentModel.js"


export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findOne({ _id: id });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}