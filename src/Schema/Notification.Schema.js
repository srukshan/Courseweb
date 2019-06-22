var mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = require("./User.Schema")

const NotificationSchema = new Schema({
    userIds:[
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        }

    ] ,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Notification', NotificationSchema)