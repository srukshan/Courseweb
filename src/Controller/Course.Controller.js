// @ts-check
var CourseSchema = require("../Schema/Course.Schema");
var UserCourseSchema = require("../Schema/UserCourse.Schema");
var NotificationSchema = require("../Schema/Notification.Schema");

// End points                   Request     Body            Authentication
// ------------------------------------------------------------------------------------
// /api/courses                 GET         [ Course ]      no auth
// /api/course/{id}             GET         Course          no auth
// /api/courses                 POST        { name }        auth admin
// /api/courses/{id}/accept     POST                        auth instructor

module.exports = new (function() {
  this.insert = data => {
    return new Promise(async (resolve, reject) => {
      var Course = new CourseSchema({
        name: data.name,
        accept: false
      });
      var id;
      Course.save()
        .then(course => {
          id = course._id;
          console.log(id);
          let instructors = data.instructors;

          instructors.forEach(instructor => {
            var UserCourse = new UserCourseSchema({
              userId: id,
              courseId: instructor
            });
            UserCourse.save();
          });
          console.log("awaa2");
          let notify = new NotificationSchema({
            userIds: instructors,
            title: "New Course Assigned",
            content: `<p> You have been assigned the ${
              data.name
            }. Please click the button below to accept</p>`,
            url: `api/courses/accept/${id}`,
            timeStamp: new Date()
          });

          notify.save().catch(err => {
            console.error("Error Save Notify : " + err);
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: err
          });
        });
    });
  };
  this.accept = (user, id) => {
    return new Promise((res, rej) => {
      UserCourseSchema.findOne({
        userId: user._id,
        courseId: id
      })
        .exec()
        .then(uc => {
          if (uc == null) {
            return rej({
              status: 500,
              message: "Error finding UserCourse"
            });
          }
          CourseSchema.findById(id)
            .exec()
            .then(course => {
              if (course == null) {
                return rej({
                  status: 500,
                  message: "Error finding Course"
                });
              }
              course
                .update({
                  accept: true
                })
                .exec()
                .then(course =>
                  res({
                    status: 200,
                    message: "Course Updated"
                  })
                )
                .catch(err => {
                  res({
                    status: 500,
                    message: err
                  });
                });
            })
            .catch(err => {
              res({
                status: 500,
                message: err
              });
            });
        })
        .catch(err => {
          res({
            status: 500,
            message: err
          });
        });
    });
  };
  this.update = (id, data) => {
    return new Promise((resolve, reject) => {
      CourseSchema.update(
        {
          _id: id
        },
        data
      )
        .then(() => {
          resolve({
            status: 200,
            message: "Course Updated"
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: `Error:- ${err}`
          });
        });
    });
  };
  this.getAll = () => {
    return new Promise((resolve, reject) => {
      CourseSchema.find()
        .exec()
        .then(data => {
          resolve({
            status: 200,
            data: data
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: `Error:- ${err}`
          });
        });
    });
  };
  this.getById = id => {
    return new Promise((resolve, reject) => {
      CourseSchema.findById(id)
        .exec()
        .then(Course => {
          resolve({
            status: 200,
            data: Course
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: `Error:- ${err}`
          });
        });
    });
  };
  this.getByUserId = id => {
    return new Promise((resolve, reject) => {
      UserCourseSchema.find({
        userId: id
      })
        .exec()
        .then(userCourses => {
          if (userCourses.length == 0) {
            reject({
              status: 404,
              message: "no Courses found"
            });
          }
          let courses = [];
          userCourses.forEach(userCourse => {
            CourseSchema.findById(userCourse.get("courseId"))
              .exec()
              .then(course => {
                courses.push(course);
              });
          });
          if (courses.length == 0) {
            reject({
              status: 404,
              message: "no Courses found"
            });
          }
          resolve({
            status: 200,
            data: courses
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: "Error Finding Course : " + err
          });
        });
    });
  };
  this.delete = id => {
    return new Promise((resolve, reject) => {
      CourseSchema.findByIdAndDelete(id)
        .exec()
        .then(() => {
          resolve({
            status: 200,
            message: "Course Deleted"
          });
        })
        .catch(err => {
          reject({
            status: 500,
            message: `Error:- ${err}`
          });
        });
    });
  };
})();
