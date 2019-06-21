// @ts-check
var UserCourseSchema = require('../Schema/UserCourse.Schema');

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var UserCourse = new UserCourseSchema({
                userId: data.userId,
                courseId: data.courseId
            })
            UserCourse.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new UserCourse"
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
            UserCourseSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "UserCourse Updated"
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
            UserCourseSchema.find().exec().then((data) => {
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
            UserCourseSchema.findById(id).exec().then(UserCourse => {
                resolve({
                    status: 200,
                    data: UserCourse
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
            UserCourseSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'UserCourse Deleted'
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