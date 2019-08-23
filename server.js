const express = require('express');
const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

const server = app.listen(3000, function() {
    console.log(`Express is now running -> PORT ${server.address().port}`);
});

