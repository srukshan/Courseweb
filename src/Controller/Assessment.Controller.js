// @ts-check
const AssessmentSchema = require('../Schema/Assessment.Schema')
const UserController = require('./User.Controller')
const CourseController = require('./Course.Controller')
const NotificationController = require('./Notification.Controller')
const UserCourseController = require('./UserCourse.Controller')
// Required to check the references whether they exist before inserting or updating
//    1. Assessment - Done
//    2. Course - Done
// Set createdDate to Date.now() - Done

async function notifyStudents(name, type, dueDate, courseId){
    await UserCourseController.getAll({ courseId : courseId }).then(async ucourses => {
        let userIds = []
        ucourses.forEach(ucourse => {
            userIds.push(ucourse.userId)
        });
        await NotificationController.insert({
            userIds: userIds,
            title: type + ' Created',
            content: 'Hi, A ' + type + ' was created due on ' + dueDate,
            timeStamp: new Date()
        })
    })
}

module.exports = new function () {
    this.insert = (data) => {
        return new Promise(async (resolve, reject) => {
            let userId = data.userId
            let courseId = data.courseId

            UserController.getById(userId).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })

            CourseController.getById(courseId).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })

            var Assessment = new AssessmentSchema({
                name: data.name,
                type: data.type,
                dueDate: data.dueDate,
                createdDate: new Date(),
                userId: data.userId,
                courseId: data.courseId
            })
            Assessment.save().then(() => {
                notifyStudents(data.name, data.type, data.dueDate, data.courseId)
                resolve({
                    status: 200,
                    message: "Added new Assessment"
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
            AssessmentSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "Assessment Updated"
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
            AssessmentSchema.find().exec().then((data) => {
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
            AssessmentSchema.findById(id).exec().then(Assessment => {
                resolve({
                    status: 200,
                    data: Assessment
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getByCourseId = (id) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.find({
                courseId: id
            }).exec().then(Assessments => {
                resolve({
                    status: 200,
                    data: Assessments
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getByCourseUserId = (data) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.find({
                userId: data.userId,
                courseId: data.courseId
            }).exec().then(Assessments => {
                resolve({
                    status: 200,
                    data: Assessments
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getByUserId = (id) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.find({
                userId: id
            }).exec().then(Assessments => {
                resolve({
                    status: 200,
                    data: Assessments
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
            AssessmentSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'Assessment Deleted'
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