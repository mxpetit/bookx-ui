var express = require('express'),
	app = express();
    server = require('http').Server(app);

app.use(express.static(__dirname));

server.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});