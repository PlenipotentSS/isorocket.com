var path = require('path');
var express = require('express');
var BodyChecker = require('./BodyChecker/BodyChecker.js');

var app = express();

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.get('/terms',function(req,res){ 
   res.sendFile( staticPath + '/terms.html');
});

app.get('/privacy',function(req,res){ 
   res.sendFile( staticPath + '/privacy-mobile.html');
});

app.get('/body-detect',function(req,res){ 
  if (req.query && !req.query.photo_url) {
    res.status(500).send({ error: 'need url param' });
  } else if (req.query) {
    console.log
    var bc = new BodyChecker(decodeURIComponent(req.query.photo_url));
    bc.run(function(result) {
      res.status(200).send({ 
        url: decodeURIComponent(req.query.photo_url),
        detected: result
      });
    });
  }
});

app.listen(3000, function() {
  console.log('listening');
});