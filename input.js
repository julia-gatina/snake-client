const { Socket } = require('dgram');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const consoleUserInput = process.stdin;
  consoleUserInput.setRawMode(true);
  consoleUserInput.setEncoding('utf8');
  consoleUserInput.resume();
  consoleUserInput.on('data', handleUserInput);

  return consoleUserInput;
};

const handleUserInput = function (key) {
  switch (key) {
    case '\u0003':
      console.log('🐍  bye bye');
      process.exit();
      break;
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '1':
      connection.write('Say: it is workinnnnng!');
      break;
    case '2':
      connection.write('Say: yay, lol!');
      break;
    default:
      // otherwise do nothing
      break;
  }
};

module.exports = setupInput;
