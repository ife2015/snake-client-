const net = require('net'); 

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131" , //135.23.222.131
    port: 50542
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successful Connection Established");
    conn.write('Name: OOU');
  })

  conn.on ('data', (data) => {
    console.log('Incoming:', data); 
  })
  
  return conn; 
}

module.exports = {connect};

// client.on('connect', () => {
//   //when a connection is established
//   console.log("sucessfully connected to server");
//   // writes the messages to the server
//   client.write('hello this travis');
// })