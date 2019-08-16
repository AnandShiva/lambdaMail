
//exports.handler = function(event, context, callback) {
    // TODO implement
    //sendEMail("subject_lambda", "body", "anandkumar.shiva@gmail.com", callback);
    var mailing_list = "anandkumar.shiva@gmail.com";
    var subject = "subject";
    var body = "body";
    // setup email data with unicode symbols
    const nodemailer = require('nodemailer');
    // edited in notepad++
    var smtpTransport = require('nodemailer-smtp-transport');
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: "anandshivaunofficial@gmail.com", // generated ethereal user
            pass: "WeakPass123" // generated ethereal password
        }
    }));
    let mailOptions = {
        from: '"SSB" <anandshivaunofficial@gmail.com>', // sender address
        to: mailing_list, // list of receivers
        subject: subject, // Subject line
        text: body, // plain text body
        html: body // html body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message,
                }),
            };
            console.log(response);
            //callback(null, response);
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Email processed succesfully!`
            }),
        };
        console.log(response);
    });

//};
