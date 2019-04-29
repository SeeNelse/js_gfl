Vue.component('components-month', {
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
            <components-week></components-week>
          </tbody>
        </table>
      </div>
    `,
    methods: {
      currentMonth: () => {
        return monthsName[calendar.getMonth()];
      }
    }
  });