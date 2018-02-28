/* eslint-disable no-param-reassign */
export default function(Message) {
  Message.greet = (msg, cb) => {
    process.nextTick(() => {
      msg = msg || 'hello';
      cb(null, `Sender says ${msg} to receiver`);
    });
  };
}
