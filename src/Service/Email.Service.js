const mailjet = require ('node-mailjet');
const API_KEY = "c0a4ca364bccb4c37c8026c95e737b3c";
const SECRET_KEY = "0a3cc1fe693518cf3d7c3ce98c57b02c";

const EmailService = new function() {
    this.send = (receiver, content ) => {
        mailjet.connect(API_KEY, SECRET_KEY);

        const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                {
                    "From": {
                        "Email": "$SENDER_EMAIL",
                        "Name": "Me"
                        },
                    "To": [
                        {
                            "Email": "$RECIPIENT_EMAIL",
                            "Name": "You"
                            }
                        ],
                    "Subject": "My first Mailjet Email!",
                    "TextPart": "Greetings from Mailjet!",
                    "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
                }
            ]
        });

        request.then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
    }
}

module.exports = EmailService