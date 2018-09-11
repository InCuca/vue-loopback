import {clientURI, emailFrom} from '../config.json';

export default function Account(Account) {
  function resetPassword(options) {
    console.log(
      '> received request password reset for email/token: ',
      options.email,
      options.accessToken.id
    );
    const url = `${clientURI}/profile`;
    const html = `Olá! <br /><br /><a href="${url}?access_token=${
      options.accessToken.id}">Clique aqui</a> para criar uma nova senha.` +
      ' <br /><br /> Caso você não tenha solicitado uma nova senha,' +
      'por favor, ignore esse e-mail.';
    const sendEmail = new Promise((resolve, reject) => {
      Account.app.models.Email.send({
        to: options.email,
        from: 'Vivescer <' + emailFrom + '>',
        subject: '[Vivescer] Alteração de senha',
        html,
      }, (err) => {
        err = new Error('ups');
        if (err) {
          console.log('> failed to send reset email to', options.email, err);
          reject();
          return;
        }
        resolve();
      });
    });

    return sendEmail;
  }

  Account.resetPassword = (options) => {
    return new Promise((sendSuccess, sendError) => {
      Account.on('resetPasswordRequest', updatedOptions => {
        resetPassword(updatedOptions)
          .then(sendSuccess)
          .catch(sendError);
      });
      Account.base
        .resetPassword(options)
        .catch(sendError);
    });
  };

  Account.remoteMethod(
    'resetPassword',
    {
      description: 'Reset password for a user with email.',
      accepts: [
        {
          arg: 'options',
          type: 'object',
          required: true,
          http: {source: 'body'},
        },
      ],
      http: {verb: 'post', path: '/reset'},
    }
  );
}
