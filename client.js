const { IP, PORT } = require('./constants');
const net = require('net');

const connect = () => {
  console.log('Connecting ...');
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('✅ Successfully connected to game server');
    conn.write('Name: JUL');
  });
  conn.on('data', data => {
    console.log(`\n 🐍 : ${data}`);
  });
  return conn;
};

module.exports = connect;
