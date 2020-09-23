
const {connect} = require(`./client.js`); 

console.log('Connecting ...'); 

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (data)=> {
    //if hits control + c
    if(data === '\\q\n') {
      process.exit();
    }
  }); 

  stdin.resume();
  return stdin;
}

connect(); 
setupInput();

