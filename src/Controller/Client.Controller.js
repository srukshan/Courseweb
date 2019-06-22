// @ts-check
const UserSchema = require('../Schema/Client.Schema')
const KeyGen = require('../Service/KeyGenerator.Service')

module.exports = new function () {
    // api/client   POST
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var User = new UserSchema({
                name: data.name,
                id: KeyGen(30),
                secret: KeyGen(30),
                userId: data.user._id
            })
            User.save().then(() => {
                resolve({
                    status: 200,
                    message: "Client Added to locker"
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.getAll = (uid) => {
        return new Promise((resolve, reject) => {
            UserSchema.find({
                userId: uid
            }).exec().then((data) => {
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
}