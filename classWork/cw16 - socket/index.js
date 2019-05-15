console.log('Start server');
let http = require('http'); // Для сервера
let url = require('url'); // Парсер ссылок
let fs = require('fs'); // Для работы с файлами

let server = new http.Server(); // Создание http-сервера
server.listen(5000);

// Обработка запросов
server.on('request', (request, response) => { // request - принимаем данные, response - то, что отправляем клиенту
  console.log('new request');
  // Чтение из файла
  fs.readFile('./public/index.html', (error, data) => { // data - возврат index.html
    response.end(data); // Ответ клиенту(в данном случае отдаем index.html)
  });
});

/// HTTP END ///

let randomColor = require('randomcolor');
// Создание WS сервера
// установка websocket: npm i --save ws
let ws = require('ws');
let wsServer = new ws.Server({
  port: 5555,
});

let counter = 0;
let players = {};

wsServer.on('connection', (client) => {
  let id = counter++;
  var player = {
    id: id,
    color: randomColor(),
    pos: {
      x: 0,
      y: 0
    }
  };
  players[id] = player;
  
  let all_json_players = JSON.stringify({
    type: 'all_players',
    info: players
  })
  client.send(all_json_players);

  wsServer.clients.forEach((cl) => { // clients - свойство сервер, все клиенты
    let message = {
      type: 'new_player',
      info: player
    };
    var message_json_str = JSON.stringify(message);
    cl.send(message_json_str);
  });

  // Событие отключение клиента
  client.on('close', () => {
    delete players[id];
    wsServer.clients.forEach((cl) => { // Сообщение всем клиентам о удалении
      let message = {
        type: 'remove_player',
        info: id
      };
      var message_json_str = JSON.stringify(message);
      cl.send(message_json_str);
    });
  });

  client.on('message', (message) => { // Ожидание сообщения от клиента
    if (message === 'ping') { // Если клиент прислал сообщение 'ping'
      client.send('pong'); // Ответ клиенту 'pong'
    }

    try {
      let data = JSON.parse(message);

      switch(data.type) {
        case 'move':
          switch(data.info) {
            case 'Up':
              players[id].pos.y--;
              break;
            case 'Down':
              players[id].pos.y++;
              break;
            case 'Right':
              players[id].pos.x++;
              break;
            case 'Left':
              players[id].pos.x--;
              break;
          }
        
        wsServer.clients.forEach((cl) => {
          let data_json = JSON.stringify({
            type: 'update_player',
            info: players[id]
          })
          cl.send(data_json);
        });

        break;
      }
    } catch (e) {

    }
  });
});