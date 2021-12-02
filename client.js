const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('✅ Successfully connected to game server');
    conn.write('Name: JUL');
  });
  conn.on('data', data => {
    console.log(`🐍 : ${data}`);
  });
};

console.log('Connecting ...');

module.exports = connect;
