const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

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
















