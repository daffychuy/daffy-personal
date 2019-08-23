var express = require('express')
var app = express()

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.send('index');
});

var server = app.listen(3000, function() {
    console.log(`Express is now running -> PORT ${server.address().port}`);
});

