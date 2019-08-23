require('ignore-styles')
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})
let authenticator= require('./authenticator');
const teams_mail_constructor = require('./teams-mail-constructor');
const gmailApi = require('./gmail-api');
console.log(authenticator);
console.log(authenticator.getAuthObject);
console.log(teams_mail_constructor);


exports.handler = async (event, context, callback) => {
    let teams = event.teams;
    let to_email_id = event.email_id;
    authenticator.getAuthObject().then(function (oAuthObject) {
        console.log(oAuthObject);
        //let teams_list = [{"team_name":"t1","team_members":[{"Name":"p2","PreferredGroup":"","email":""},{"Name":"p4","PreferredGroup":"","email":""}]},{"team_name":"t2","team_members":[{"Name":"p5","PreferredGroup":"","email":""},{"Name":"p3","PreferredGroup":"","email":""}]},{"team_name":"t3","team_members":[{"Name":"p6","PreferredGroup":"","email":""},{"Name":"p1","PreferredGroup":"","email":""}]}];

        //let email_id = 'anandshivaunofficial@gmail.com';
        let mail_body = teams_mail_constructor(teams_list);
        console.log(mail_body);
        gmailApi.sendMail(mail_body,to_email_id,oAuthObject);
    });
};


