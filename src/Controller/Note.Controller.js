// @ts-check
var mongoose        = require('../Schema/Schema.Mapper');
var NoteSchema      = mongoose.model('Note');

module.exports = new function(){
    this.insert = (data) => {
        return new Promise( (resolve,reject) => {
            var note = new NoteSchema({
                title: data.title,
                content: data.content,
                date: data.date
            })
            note.save().then(() => {
                resolve({status: 200, message: "Added new Note"})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            NoteSchema.update({_id:id},data).then(()=>{
                resolve({status: 200, message: "Note Updated"})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            NoteSchema.find().exec().then((data) => {
                resolve({status: 200, data:data})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.getById = (id) => {
        return new Promise((resolve, reject) => {
            NoteSchema.findById(id).exec().then(note => {
                resolve({status: 200, data:note})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            NoteSchema.findByIdAndDelete(id).exec().then(() => {
                resolve({status: 200, message: 'Note Deleted'})
            }).catch(err => {
                reject({status: 500, message: `Error:- ${err}`})
            })
        })
    }
}