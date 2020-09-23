
const {connect} = require(`./client.js`); 

console.log('Connecting ...'); 

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (data) => {
    if(data == '\\q\n') {
      process.exit();
    }
  });
  return stdin;
}


connect(); 

