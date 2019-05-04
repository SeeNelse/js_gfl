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
      <td :class="{ 'calendar__grey': day.gray, 
                    'calendar__current': day.currentDay, 
                    'calendar__weekend' : day.weekend }">{{ day.number }}</td>
    `,
    props: ['day'],
    methods: {
      
    }
  });

  Vue.component('comp-week', {
    template: `
      <tr>
        <comp-day v-for='(day, index) in week' :key='index' :day='day'></comp-day>
      </tr>
    `,
    props: ['createCurrentMonth', 'week'],
    methods: {
      
    }
  });

  Vue.component('comp-month', {
    template: `
      <div class="calendar__wrapper">
        <div class="calendar__top">
          <span class="calendar__prev" @click="$emit('prev-month')"><<</span>
          <span class="calendar__mouth">{{ currentMonthName }} {{ currentYear }}</span>
          <span class="calendar__next" @click="$emit('nextMonth')">>></span>
        </div>
        <table class="calendar">
          <thead>
            <tr>
              <comp-days-of-week v-for='(item, index) in daysName' :item='item' :key='index'></comp-days-of-week>
            </tr>
          </thead>
          <tbody>
            <comp-week :create-current-month='createCurrentMonth' v-for='(week, index) in createCurrentMonth' :key='index' :week='week'></comp-week>
          </tbody>
        </table>
      </div>
    `,
    props: ['daysName', 'currentMonthName', 'createCurrentMonth', 'currentYear'],
    data() {
      return {

      }
    },
    methods: {
      array1() {
        console.log(1)
      }
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
    data() {
      return {
        daysName: daysName,
        monthsName: monthsName,
        weekCount: 1,
      }
    },
    computed: {
      currentMonthName(prev, next) {
        let currentMonthName = new Date();
        if (next) {
          return monthsName[currentMonthName.getMonth()-1];
        } else if (prev) {
          return monthsName[currentMonthName.getMonth()+1];
        } else {
          return monthsName[currentMonthName.getMonth()];
        }
        
      },

      currentMonth() {
        let currentMonth = new Date();
        return currentMonth.getMonth();
      },

      currentYear() {
        let currentMonth = new Date();
        return currentMonth.getFullYear();
      },

      prevMonth() {
        console.log(1);
        // this.createCurrentMonth(this.currentYear, this.currentMonth - 1);
      }
    },
    methods: {
      createCurrentMonth(year, month) {
        console.log(1);
        let previousMonth = this.daysOfMonth(year, month-1).reverse();
        let currentMonth = this.daysOfMonth(year, month);
        let nextMonth = this.daysOfMonth(year, month+1);
        let result = [];

        for (let key in previousMonth) {
          if (previousMonth[key].day === 6) {
            break;
          }
          previousMonth[key].gray = true;
          result.push(previousMonth[key]);
        }

        result.reverse();
        
        for (let key in currentMonth) {
          result.push(currentMonth[key]);
          if (currentMonth[key].day === 5 || currentMonth[key].day === 6) {
            currentMonth[key].weekend = true;
          }
        }

        for (let key in nextMonth) {
          if (nextMonth[key].day === 0) {
            break;
          }
          nextMonth[key].gray = true;
          result.push(nextMonth[key]);
        }

        return this.monthToWeeks(result);
      },
      
      daysOfMonth(year, month) {
        let currentDate = new Date();
        // формируем объект дат для месяца
        let date = new Date(year, month);
        let monthDays = [];
        while (date.getMonth() === month) {
          if (mondayWeek) {
            monthDays[date.getDate()-1] = {
              number: date.getDate(),
              day: daysName[date.getDay() - 1] ? date.getDay() - 1 : 6,
              currentDay: date.getDate() === currentDate.getDate() && 
                        month === currentDate.getMonth() && 
                        year === currentDate.getFullYear() ? true : false,
            };
          } else {
            monthDays[date.getDate()-1] = {
              number: date.getDate(),
              day: date.getDay(),
              currentDay: date.getDate() === currentDate.getDate() && 
                        month === currentDate.getMonth() && 
                        year === currentDate.getFullYear() ? true : false,
            };
          }
          date.setDate(date.getDate() + 1);
        }
        return monthDays;
      },

      monthToWeeks(month) {
        let resultMonth = [],
        week = 0,
        days = -1;
        resultMonth[0] = []
        for (let key in month) {
          if (days < 6) {
            days++;
          } else { 
            week++;
            days = 0;
            resultMonth[week] = []; 
          }
          resultMonth[week][days] = month[key];
          
        }
        return resultMonth;
      },
    }
  });

}());



// if (Object.keys(monthDays).length % 7 === 3) {
//   this.weekCount++;
// }