// @ts-check
var mongoose = require('../Schema/Schema.Mapper');
var CourseSchema = mongoose.model('Course');

// End points                   Request     Body            Authentication
// ------------------------------------------------------------------------------------
// /api/courses                 GET                         no auth
// /api/course/{id}             GET                         no auth
// /api/courses                 POST        { name }        auth admin
// /api/courses/{id}/accept     PUT                         auth instructor

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var Course = new CourseSchema({
                name: data.name,
                userId: data.userId,
                accept: data.accept
            })
            Course.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new Course"
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
            CourseSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "Course Updated"
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
            CourseSchema.find().exec().then((data) => {
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
            CourseSchema.findById(id).exec().then(Course => {
                resolve({
                    status: 200,
                    data: Course
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
            CourseSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'Course Deleted'
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