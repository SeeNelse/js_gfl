let port = 5000;
let express = require('express');
let bodyParser = require('body-parser');
let server = express();

server.use(bodyParser.json());

server.use('/', express.static('public'));

server.get('/test.json', (req, resp) => { // fetch('/test.json').then((resp) => resp.json()).then((data) => { console.log(data); })
  resp.json({
    test: 'OK'
  });
});

server.all('/all_data', (req, resp) => {
  resp.send('All data OK');
});

server.post('/set_test', (req, resp) => {
  console.log(req.body)
  resp.json(req.body);
});

server.listen(port, () => {
  console.log('Server runned on port:', port);
});