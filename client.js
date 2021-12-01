const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('✅ connected to the server');
  });
  conn.on('data', data => {
    console.log(data);
  });
};

console.log('Connecting ...');

module.exports = connect;
