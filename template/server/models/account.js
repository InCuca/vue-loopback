import {host} from '../config.json';

export default function(Account) {
  Account.on('resetPasswordRequest', (info) => {
    const url = `https://${host}/#!/profile`;
    const html = `Hello! <br /><br />Click <a href="${url}?access_token=${
      info.accessToken.id}">here</a> to create a new password.` +
     ' <br /><br /> If you have not requested a password change,' +
     'please ignore this email. <br /><br />Webmaster';
    Account.app.models.Email.send({
      to: info.email,
      from: '{{name}} <noreply@mydomain.com>',
      subject: '[{{name}}] Create a new password',
      html,
    }, (err) => {
      if (err) return console.log(err);
      console.log('> sending password reset email to:', info.email);
      return
    });
  });
}
