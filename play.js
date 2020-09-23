
const {connect} = require(`./client.js`); 

console.log('Connecting ...'); 
connect(); 

// client.on('connect', () => {
//   //when a connection is established
//   console.log("sucessfully connected to server");
//   // writes the messages to the server
//   client.write('hello this travis');
// })