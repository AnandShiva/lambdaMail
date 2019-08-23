const {google} = require('googleapis');
const mimemessage = require('mimemessage');
const Base64 = require('js-base64').Base64;

function sendMail(html_body,to_id,OAuth){
    const gmail = google.gmail({version: 'v1', OAuth});
    var msg = mimemessage.factory({
        contentType: 'multipart/mixed',
        body: ['This is the plain text version of the message.']
    });
    msg.header('Subject', 'Tasks List');
    msg.header('From', 'Google <no-reply@accounts.google.com>');
    msg.header('To',to_id);
    var base64EncodedEmail = Base64.encodeURI(msg);
    gmail.users.messages.send({
        'userId': 'me',
        'resource': {
          'raw': base64EncodedEmail
        }
      },(err, res) => {
        console.log('error');  
        console.log(err);
        console.log('res');
        console.log(res);
      }); 
}

module.exports= {
    sendMail : sendMail
}