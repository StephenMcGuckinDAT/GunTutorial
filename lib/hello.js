// `http` is a standard library
// built into node.
var http = require('http');

// Create a new server instance.
var server = http.createServer();

// Our GUN setup from the last example.
var Gun = require('gun');
var gun = Gun({web: server});

// Start the server on port 8080.
server.listen(8080, function () {
  console.log('Server listening on http://localhost:8080/gun')
})

// Import the gun library

var Gun = require('gun');

// Create a new gun instance
var gun = Gun();

// Read `greetings`, saving it to a variable.
var greetings = gun.get('greetings');

// Update the value on `greetings`.
greetings.put({
	hello: 'world',
})

// Print the value!
greetings.on(function (update) {
	console.log('Update:', update)
})
