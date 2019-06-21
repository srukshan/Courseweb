// @ts-check
var StudentAssessmentSchema = require('../Schema/StudentAssessment.Schema');

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var StudentAssessment = new StudentAssessmentSchema({
                fileName: data.fileName,
                mark: data.mark,
                submissionDate: data.submissionDate,
                userId: data.userId,
                assessmentId: data.assessmentId
            })
            StudentAssessment.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new StudentAssessment"
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
            StudentAssessmentSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "StudentAssessment Updated"
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
            StudentAssessmentSchema.find().exec().then((data) => {
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
            StudentAssessmentSchema.findById(id).exec().then(StudentAssessment => {
                resolve({
                    status: 200,
                    data: StudentAssessment
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
            StudentAssessmentSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'StudentAssessment Deleted'
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