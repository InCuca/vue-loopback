export default function(Message) {
  Message.greet = (msg, cb) => {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, 'Sender says ' + msg + ' to receiver');
    });
  };
};
