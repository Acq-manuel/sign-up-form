const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.post('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'failure.html'));
});

app.post('/failure', function(req, res) {
    res.redirect('/');
})
app.listen(process.env.PORT || 3000, function () {
    console.log('Up and running on port 3000 ');
});
