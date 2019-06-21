// @ts-check
var UserSchema = require('../Schema/User.Schema')

// Required to implement findByToken(key) function

module.exports = new function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var User = new UserSchema({
                username: data.username,
                role: data.role,
                fname: data.fname,
                lname: data.lname,
                telno: data.telno,
                email: data.email,
                password: data.password,
                dept: data.dept,
                regDate: data.regDate
            })
            User.save().then(() => {
                resolve({
                    status: 200,
                    message: "Added new User"
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
            UserSchema.update({
                _id: id
            }, data).then(() => {
                resolve({
                    status: 200,
                    message: "User Updated"
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
            UserSchema.find().exec().then((data) => {
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
            UserSchema.findById(id).exec().then(User => {
                resolve({
                    status: 200,
                    data: User
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
            UserSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({
                    status: 200,
                    message: 'User Deleted'
                })
            }).catch(err => {
                reject({
                    status: 500,
                    message: `Error:- ${err}`
                })
            })
        })
    }
    this.authenticate = (req, res) => {
        UserSchema.findOne({
            username: req.body.username
        }, (err, user) => {
            if (err) {
                throw err
            }
            if (!user) {
                res.status(403).send({
                    success: false,
                    msg: 'Authentication failed, User not found'
                });
            } else {
                user.verifyPassword(req.body.password, (err, match) => {
                    if (match && !err) {
                        res.json({
                            success: true
                        });
                        return done(null, user)

                    } else {
                        return res.status(403).send({
                            success: false,
                            msg: 'Authenticaton failed, wrong password.'
                        });
                    }
                })
            }
        })
    }
}