(function(){

  var keyA = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight'
  };

  var keyB = {
    up: 'KeyW',
    down: 'KeyS',
    left: 'KeyA',
    right: 'KeyD'
  };
  
  function moveSquare(keys, color) {
    var keyState = {
      up: false,
      down: false,
      left: false,
      right: false
    };
    if (document.querySelector('.square')) {
      var position = {
        y: 0,
        x: 110
      };
    } else {
      var position = {
        y: 0,
        x: 0
      };  
    }
    

    var square = document.createElement('div');
    square.className = 'square';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.position = 'absolute';
    square.style.backgroundColor = color;
    document.body.appendChild(square);
    

    document.addEventListener('keydown', function(event) {
      if (event.code === keys.down) {
          keyState.down = true;
      } else if (event.code === keys.up) {
          keyState.up = true;
      } else if (event.code === keys.left) {
          keyState.left = true;
      } else if (event.code === keys.right) {
          keyState.right = true;
      }
    });

  
    document.addEventListener('keyup', function(event) {
      if (event.code === keys.down) {
          keyState.down = false;
      } else if (event.code === keys.up) {
          keyState.up = false;
      } else if (event.code === keys.left) {
          keyState.left = false;
      } else if (event.code === keys.right) {
          keyState.right = false;
      }
    });
  
  
    var actionInterval = setInterval(function() {
      if (keyState.up) {
          position.y--;
      }
      if (keyState.down) {
          position.y++;
      }
      if (keyState.left) {
          position.x--;
      }
      if (keyState.right) {
          position.x++;
      }
    });
  

    var drawInterval = setInterval(function() {
      square.style.top = position.y + 'px';
      square.style.left = position.x + 'px';
    }, (1000/100));
  }

  moveSquare(keyA, '#1888ca');
  moveSquare(keyB, '#da115b');

  var squares = document.querySelectorAll('.square');

  if (squares.length >= 2) {
  
  }

}())