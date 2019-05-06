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
                    'calendar__current': day.presentDay, 
                    'calendar__weekend' : day.weekend }">{{ day.number }}</td>
    `,
    props: ['day']
  });

  Vue.component('comp-week', {
    template: `
      <tr>
        <comp-day v-for='(day, index) in week' :key='index' :day='day'></comp-day>
      </tr>
    `,
    props: ['createCurrentMonth', 'week']
  });

  Vue.component('comp-month', {
    template: `
      <div class="calendar__wrapper">
        <div class="calendar__top">
          <span class="calendar__prev" @click="$emit('prev-month')"><<</span>
          <span class="calendar__mouth">{{ currentMonthName }} {{ currentYear }}</span>
          <span class="calendar__next" @click="$emit('next-month')">>></span>
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
    props: ['daysName', 'currentMonthName', 'createCurrentMonth', 'currentYear', 'slideMonth']
  });

  Vue.component('comp-days-of-week', {
    template: `
      <th>{{ item }}</th>
    `,
    props: ['item']
  });

  new Vue({ 
    el: '#app',
    data() {
      return {
        daysName,
        monthsName,
        getMonth: this.getCurrentMonth(),
        getYear: this.getCurrentYear(),
        weekCount: 1,
        currentMonth: this.createCurrentMonth(this.getCurrentYear(), this.getCurrentMonth()),
      }
    },
    methods: {
      currentMonthName() {
        return monthsName[this.getMonth];
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
              presentDay: date.getDate() === currentDate.getDate() && 
                        month === currentDate.getMonth() && 
                        year === currentDate.getFullYear() ? true : false,
            };
          } else {
            monthDays[date.getDate()-1] = {
              number: date.getDate(),
              day: date.getDay(),
              presentDay: date.getDate() === currentDate.getDate() && 
                        month === currentDate.getMonth() && 
                        year === currentDate.getFullYear() ? true : false,
            };
          }
          date.setDate(date.getDate() + 1);
        }
        return monthDays;
      },

      createCurrentMonth(year, month) {
        let previousMonth = this.daysOfMonth(year, month-1).reverse();
        let currentMonth = this.daysOfMonth(year, month);
        let nextMonth = this.daysOfMonth(year, month+1);
        let result = [];
        if (!previousMonth.length) {
          previousMonth = this.daysOfMonth(year-1, 11).reverse();
        }
        if (!nextMonth.length) {
          nextMonth = this.daysOfMonth(year+1, 0);
        }

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

      getCurrentMonth() {
        let currentMonth = new Date();
        return currentMonth.getMonth();
      },

      getCurrentYear() {
        let currentMonth = new Date();
        return currentMonth.getFullYear();
      },

      slideMonth(next) {
        if (next) {
          if (this.getMonth > 10) {
            this.getMonth = 0;
            this.getYear++;
            this.currentMonth = this.createCurrentMonth(this.getYear, this.getMonth);
          } else {
            this.currentMonth = this.createCurrentMonth(this.getYear, this.getMonth+1);
            this.getMonth++;
          }
        } else {
          if (this.getMonth < 1) {
            this.getMonth = 11;
            this.getYear--;
            this.currentMonth = this.createCurrentMonth(this.getYear, this.getMonth);
          } else {
            this.currentMonth = this.createCurrentMonth(this.getYear, this.getMonth-1);
            this.getMonth--;
          }
        }
      }
    }
  });

}());