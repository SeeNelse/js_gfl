(function() {
  let mondayWeek = true; // true - monday start a week; false - sunday.
  let daysName = [];
  if (mondayWeek) {
    daysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  } else {
    daysName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  }
  let monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  


  Vue.component('comp-day', {
    template: `
      <td></td>
    `,
    methods: {
  
    }
  });

  Vue.component('comp-week', {
    template: `
      <tr>
        <comp-day></comp-day>
      </tr>
    `,
    props: ['daysOfMonth'],
    methods: {
      
    }
  });

  Vue.component('comp-month', {
    template: `
      <div class="calendar__wrapper">
        <div class="calendar__top">
          <span class="calendar__prev"><<</span>
          <span class="calendar__mouth">{{ currentMonthName }}</span>
          <span class="calendar__next">>></span>
        </div>
        <table class="calendar">
          <thead>
            <tr>
              <comp-days-of-week v-for='(item, index) in daysName' :item='item' :key='index'></comp-days-of-week>
            </tr>
          </thead>
          <tbody>
            <comp-week :days-of-month='daysOfMonth'></comp-week>
          </tbody>
        </table>
      </div>
    `,
    props: ['daysName', 'currentMonthName', 'daysOfMonth'],
    data: () => {
      return {

      }
    },
    methods: {

    }
  });

  Vue.component('comp-days-of-week', {
    template: `
      <th>{{ item }}</th>
    `,
    props: ['item'],
    methods: {

    }
  });

  new Vue({
    el: '#app',
    data: () => {
      return {
        daysName: daysName,
        monthsName: monthsName,
        currentMonth: () => {
          let currentMonth = new Date();
          return currentMonth.getMonth();
        },
        currentYear: () => {
          let currentMonth = new Date();
          return currentMonth.getFullYear();
        },
        daysOfMonth: (year, month) => {
          let date = new Date(year, month);
          let monthDays = {};
          while (date.getMonth() === month) {
            if (mondayWeek) {
              monthDays[date.getDate()] = {
                number: date.getDate(),
                day: daysName[date.getDay() - 1] ? daysName[date.getDay() - 1] : 'Su',
              };
            } else {
              monthDays[date.getDate()] = {
                number: date.getDate(),
                day: daysName[date.getDay()],
              };
            }
            date.setDate(date.getDate() + 1);
          }
          return monthDays;
        },
      }
    },
    methods: {
      currentMonthName: () => {
        let currentMonthName = new Date();
        return monthsName[currentMonthName.getMonth()];
      },
      
    }
  });

}());


