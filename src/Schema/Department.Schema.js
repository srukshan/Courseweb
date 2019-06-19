var mongoose = require('mongoose')
const Schema = mongoose.Schema

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = DepartmentSchema