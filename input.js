let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn; 
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function (data) {
    if(data == '\u0003') {
      process.exit();
    }
    if(data === "w") {
      connection.write("Move: up");
    }
    if(data === "a") {
      connection.write("Move: left");
    } 
    if (data === "s") {
      connection.write("Move: down");
    } 
    if (data === "d") {
      connection.write("Move: right");
    }
    if (data === "e") {
      connection.write("Say: YUM");
    }
  }
  
  stdin.on('data', handleUserInput)

  return stdin;
}

module.exports = {setupInput}; 