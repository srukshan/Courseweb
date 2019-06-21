// @ts-check
var NotificationSchema = require('../Schema/Notification.Schema');

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var Notification = new NotificationSchema({
                userIds: data.userIds,
                title: data.title,
                content: data.content,
                timeStamp: data.timeStamp
            })
            Notification.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new Notification"
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
            NotificationSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "Notification Updated"
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
            NotificationSchema.find().exec().then((data) => {
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
            NotificationSchema.findById(id).exec().then(Notification => {
                resolve({
                    status: 200,
                    data: Notification
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
            NotificationSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'Notification Deleted'
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