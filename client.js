const net = require('net');

const connect = () => {
  console.log('Connecting ...');
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('✅ Successfully connected to game server');
    conn.write('Name: JUL');
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 505);
  });
  conn.on('data', data => {
    console.log(`\n 🐍 : ${data}\nPress ctrl + c to exit`);
  });
  return conn;
};

module.exports = connect;
