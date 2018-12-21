//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
<<<<<<< HEAD
app.use(express.static('dist'));
=======
app.use(express.static('./dist/'));
>>>>>>> 53e35e30c2e15608a82ee87c2ee45ef04effe3b9

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
