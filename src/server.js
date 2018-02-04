const express = require('express');
var fs = require("fs");
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/dates', (req, res) => {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.listen(port, () => console.log(`Listening on port ${port}`));