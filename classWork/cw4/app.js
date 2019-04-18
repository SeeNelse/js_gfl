var once = (function(){
  var runned = false;
  return function() {
      if (runned) {
          return;
      }

      runned = true;

      console.log('Once runned');
  }
}());


once();
once();
once();
once();



var debounce = (function(){
  var timeout;
  var counter = 0;
  return function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
          console.log(counter++);
      }, 300);
      return;
  }
}());


debounce();
debounce();
debounce();


setTimeout(function(){ 
  debounce(); 
}, 301);


// cw

var debounce = function(callbackFunc, time) {
  var timeout;
  return function() {
      clearTimeout(timeout);
      timeout = setTimeout(callbackFunc, time);
  };
};

var helloFunc = function() {
  console.log('hello')
}

var my_debounce = debounce(helloFunc, 500);
  
my_debounce();
my_debounce();
my_debounce();


setTimeout(function() {
 my_debounce(); 
}, 1000); 



var once = function (callBackFunc){
  var runned = false;
  return function() {
      if (runned) {
          return;
      }
      callBackFunc();
      runned = true;
      
  }
};

var helloOnce = once(function() {
    console.log('hello')
});

helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();