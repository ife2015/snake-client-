const net = require('net'); 
const {IP, PORT} = require(`./constant.js`);

const connect = function () {
  const conn = net.createConnection({
    host: IP , //135.23.222.131
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successful Connection Established");
    conn.write('Name: OOU');
  });

  conn.on ('data', (data) => {
    console.log('Incoming:', data); 
  });

  
  return conn; 
}

module.exports = {connect};

