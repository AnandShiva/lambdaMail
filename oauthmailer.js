
//exports.handler = function(event, context, callback) {
// TODO implement
//sendEMail("subject_lambda", "body", "anandkumar.shiva@gmail.com", callback);
var { google } = require('googleapis');
const nodemailer = require('nodemailer');
const service_key = require('./service-key.json');
const cred_key = require('./cred.json');
var sender_email = "anandshivaunofficial@gmail.com";
var mailing_list = "anandkumar.shiva@gmail.com";
var subject = "subject";
var body = "body";
let mailOptions = {
    from: '"SSB" <anandshivaunofficial@gmail.com>', // sender address
    to: mailing_list, // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
    html: body // html body
};
var jwt_client = new google.auth.JWT(service_key.client_email,
    null, service_key.private_key, ["https://mail.google.com","https://www.googleapis.com/auth/gmail.send"],
    null);
jwt_client.authorize(function (error, tokens) {
    //console.log("Error"+error);
    console.log(tokens.access_token);
    var transporter = nodemailer.createTransport({
        service : "gmail",
        port : 465,
        secure : true,
        auth: {
            type: 'OAuth2',
            user: sender_email,
            serviceClient: service_key.client_id,
            accessToken: tokens.access_token,
            privateKey: service_key.private_key,
            expires: tokens.expiry_date
        }
    });

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message,
                }),
            };
            console.log(response);
            //callback(null, response);
        } else {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: `Email processed succesfully!`
                }),
            };
            console.log(response);
        }

    });


});



// setup email data with unicode symbols
// edited in notepad++
//var smtpTransport = require('nodemailer-smtp-transport');


// transporter.on('token', token => {
//     console.log('A new access token was generated');
//     console.log('User: %s', token.user);
//     console.log('Access Token: %s', token.accessToken);
//     console.log('Expires: %s', new Date(token.expires));
// });





//};
