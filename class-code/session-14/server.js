const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const mongoLink = 'mongodb://mani2:123pass@ds151086.mlab.com:51086/js-apis-blog';

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(mongoLink, (error, database) => {
  console.log('here')
  if (error) {
    console.log('Failed to connect to the Database ', error);
    return
  }

  app.listen(3000, () => {
    console.log('Express litening on port 3000')
  });

  app.get('/', function(request, response) {
    // __dirname is a *magical* global node.js variable
    // that represents the current active directory
    console.log('Current direcory: ', __dirname)
    response.sendFile(__dirname + '/index.html')
  });

  app.get('/feed', function(request, response) {
    response.sendFile(__dirname + '/feed.html')
  })

  app.post('/blog-post', function(request, response) {
    console.log(request.body)
    response.redirect('/feed')
  });
  // ... start the server
})

















