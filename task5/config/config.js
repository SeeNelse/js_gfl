var monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

var calendar = new Date();
 


var myDate = new Date();
var fullDate = "Сегодня: " + myDate.getDate() + " " + monthsName[myDate.getMonth()] + 
                " " + myDate.getFullYear() + ", " + daysName[myDate.getDay()];
// document.write(fullDate);



function getDaysInMonth(month, year) {
  var date = new Date(year, month);
  var days = [];
  while (date.getMonth() === month) {
    console.log(daysName[date.getDate()]);
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  console.log(days);
  return days;
}

getDaysInMonth(3, 2019);
