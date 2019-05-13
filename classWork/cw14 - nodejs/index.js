let list = require('./list');
let counter = 0;

setInterval(function() {
  console.log(counter++);
}, 1000);


console.log(list);