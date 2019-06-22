var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

var User = require('../Schema/User.Schema');
var Client = require('../Schema/Client.Schema');
var Token = require('../Schema/Token.Schema');

passport.use("basic", new BasicStrategy(
    function (username, password, done) {
        console.log('basic authentication');
        User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, {
                    message: "Invalid user"
                })
            }
            user.verifyPassword(password, function (err, match) {
                if (!match) {
                    return done(null, false)
                }
                console.log(match)
                return done(null, user)
            })

        })
    }
));

passport.use('client-basic', new BasicStrategy(

    function (username, password, done) {
        console.log('client-basic authentication');
        console.log(username);
        Client.findOne({
            id: username
        }, function (err, client) {
            if (err) {
                return done(err)
            }
            if (!client || client.secret !== password) {
                return done(null, false)
            }

            console.log(client);
            return done(null, client);
        })
    }
))

passport.use(new BearerStrategy(
    function (accessToken, done) {
        console.log('Bearer authentication');
        console.log(accessToken);

        Token.findOne({
            value: accessToken
        }, function (err, token) {
            console.log(token);
            if (err) {
                return done(err)
            }
            if (!token) {
                return done(null, false)
            }
            User.findOne({
                _id: token.userId
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                done(null, user, {
                    scope: '*'
                });
            })
        })
    }
));

module.exports = new function () {
    this.isAuthenticated = passport.authenticate(['basic', 'bearer'], {
        session: false
    })
    this.isClientAuthenticated = passport.authenticate('client-basic', {
        session: false
    })
    this.isBeareAuthenticated = passport.authenticate('bearer', {
        session: false
    })
    this.permit = (...allowed) => {
        const isAllowed = role => allowed.indexOf(role) > -1;

        // return a middleware
        return (request, response, next) => {
            if (request.user && isAllowed(request.user.role))
                next(); // role is allowed, so continue on the next middleware
            else {
                response.status(403).json({
                    message: "Forbidden"
                }); // user is forbidden
            }
        }
    }
}