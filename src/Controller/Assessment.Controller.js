// @ts-check
var mongoose        = require('../Schema/Schema.Mapper');
var AssessmentSchema      = mongoose.model('Assessment');

module.exports = new function(){
    this.insert = (data) => {
        return new Promise( (resolve,reject) => {
            var Assessment = new AssessmentSchema({
                name: data.name,
                type: data.type,
                dueDate: data.dueDate,
                createdDate: data.createdDate,
                AssessmentId: data.AssessmentId,
                courseId: data.courseId
            })
            Assessment.save().then(() => {
                resolve({status: 200, message: "Added new Assessment"})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.update({_id:id},data).then(()=>{
                resolve({status: 200, message: "Assessment Updated"})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.find().exec().then((data) => {
                resolve({status: 200, data:data})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.findById(id).exec().then(Assessment => {
                resolve({status: 200, data:Assessment})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            AssessmentSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({status: 200, message: 'Assessment Deleted'})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
}