# Courseweb

This Application Framework Group Project is a Web application that serves as a Student and Instructor information system. System functionality as follows;

1.  There are three user roles admin, instructor and students.
2.  Admins can create other admins and instructors. Students need to sign up to the system.
3.  Once admin creates an instructor, it should be notified to the instructor via email.
4.  Admins can create courses and add instructors to course. Instructors should get notifications on new course creations when logged in to the system. After instructor accept the course Students can join the course.
5.  Instructors can create assignments and exams for a course with due dates. Student should get notifications on these. Instructor can edit these dues dates (only to a later date than the original one).
6.  Students can upload files for assignments and exams before the due date. Instructor should be able to view these files and enter marks for the assignment or exam. Student will get notified on these markings.
7.  System should be secured and cannot be accessed without proper authentication.
8.  Authorization should be maintained and students cannot create, edit assignments or exams.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
VsCode
NodeJS
Node Package Manager
```

### Installing

Here is a step by step guide on how to get a development env running

Run the following commands on terminal at the location that you want to install

```
git clone http://github.com/srukshan/Courseweb
```

And then enter this command in the terminal

```
cd Courseweb && npm run install
```

Run the project by executing the following command

```
cd Courseweb && npm run dev
```

## Features

1.  There are three user roles admin, instructor and students.
2.  Admins can create other admins and instructors. Students need to sign up to the system.
3.  Once admin creates an instructor, it should be notified to the instructor via email.
4.  Admins can create courses and add instructors to course. Instructors should get notifications on new course creations when logged in to the system. After instructor accept the course Students can join the course.
5.  Instructors can create assignments and exams for a course with due dates. Student should get notifications on these. Instructor can edit these dues dates (only to a later date than the original one).
6.  Students can upload files for assignments and exams before the due date. Instructor should be able to view these files and enter marks for the assignment or exam. Student will get notified on these markings.
7.  System should be secured and cannot be accessed without proper authentication.
8.  Authorization should be maintained and students cannot create, edit assignments or exams.

## Deployment

Run the following commands on terminal at the location that you want to install

```
git clone http://github.com/srukshan/Courseweb
```

And then enter this command in the terminal

```
cd Courseweb && npm run install
```

Run the project by executing the following command

```
cd Courseweb && npm run prod
```

## Built With

- [React](https://reactjs.org/docs/) - The web Frontend framework used
- [Node JS](https://nodejs.org/en/docs/) - The web Frontend server
- [Maven](https://maven.apache.org/) - Dependency Management
-
- [Express](https://docs.spring.io/spring-boot/docs/current/reference/html/) - Web Backend Restful API Server
- [MongoDB](https://docs.mongodb.com/) - Database

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GNU Genaral Public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
