let port = 5000;
let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let dataInFront = [];

server.use(bodyParser.json());

server.use('/', express.static('public'));

server.get('/get_data.json', (req, resp) => { // fetch('/test.json').then((resp) => resp.json()).then((data) => { console.log(data); })
  resp.json(dataInFront);
});

server.post('/post_data', (req, resp) => {
  dataInFront.push(req.body);
});

server.listen(port, () => {
  console.log('Server runned on port:', port);
});