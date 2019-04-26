(function() {
  var calendar = new Date();
  var monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



  function getDaysInMonth(month, year) {
    var date = new Date(year, month);
    var days = [];
    while (date.getMonth() === month) {
      console.log(date.getDate());
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    console.log(days);
    return days;
  }

  getDaysInMonth(3, 2019);

  Vue.component('month', {
    template: `
      <div class="calendar">
        <div class="calendar__top">
          <span class="calendar__prev"><<</span>
          <span class="calendar__mouth">{{ currentMonth() }}</span>
          <span class="calendar__next">>></span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    methods: {
      currentMonth: () => {
        return monthsName[calendar.getMonth()];
      }
    }
  })

  new Vue({
    el: '#app',
    data: () => {
      return {

      }
    },
    
  });

}());