// @ts-check
var mongoose = require('../Schema/Schema.Mapper');
var DepartmentSchema = mongoose.model('Department');

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var Department = new DepartmentSchema({
                name: data.name
            })
            Department.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new Department"
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            DepartmentSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "Department Updated"
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            DepartmentSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    data: data
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            DepartmentSchema.findById(id).exec().then(Department => {
                resolve({
                    status: 200,
                    data: Department
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            DepartmentSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'Department Deleted'
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
}