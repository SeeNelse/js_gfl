function Calc(a, b) {
  if (typeof(a) != 'number' || typeof(b) != 'number') {
    console.log('ERROR!', a , 'or', b, 'is not a number');
  }

  var resultCalc = null;

  this.sum = function() {
    this.resultCalc = a + b;
    return true;
  }

  this.subtract = function() {
    this.resultCalc = a - b;
    return true;
  }

  this.divide = function() {
    this.resultCalc = a / b;
    return true;
  }

  this.multiple = function() {
    this.resultCalc = a * b;
    return true;
  }

  this.result = function() {
    return this.resultCalc;
  }
}

var calcObj = new Calc(5, 4);

calcObj.sum();
console.log(calcObj.result());
calcObj.subtract();
console.log(calcObj.result());
calcObj.divide();
console.log(calcObj.result());
calcObj.multiple();
console.log(calcObj.result());

console.warn('Another func:');

function CalcSet() {
  var a = null;
  var b = null;
  var resultCalc = null;

  this.setA = function(a) {
    if (typeof(a) != 'number') {
      console.log('ERROR!', a , 'or', b, 'is not a number');
    }
    this.a = a;
  }

  this.setB = function(b) {
    if (typeof(b) != 'number') {
      console.log('ERROR!', a , 'or', b, 'is not a number');
    }
    this.b = b;
  }

  this.sum = function() {
    this.resultCalc = this.a + this.b;
    return true;
  }

  this.subtract = function() {
    this.resultCalc = this.a - this.b;
    return true;
  }

  this.divide = function() {
    this.resultCalc = this.a / this.b;
    return true;
  }

  this.multiple = function() {
    this.resultCalc = this.a * this.b;
    return true;
  }

  this.result = function() {
    return this.resultCalc;
  }
}


var calcSetObj = new CalcSet();

calcSetObj.setA(5);
calcSetObj.setB(4);

calcSetObj.sum();
console.log(calcSetObj.result());
calcSetObj.subtract();
console.log(calcSetObj.result());
calcSetObj.divide();
console.log(calcSetObj.result());
calcSetObj.multiple();
console.log(calcSetObj.result());