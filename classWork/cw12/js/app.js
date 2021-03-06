(function(){

  let ingredients = [
    {
      id: 1,
      name: 'milk',
      price: 100,
      count: 0,
    },
    {
      id: 2,
      name: 'bread',
      price: 200,
      count: 0,
    },
    {
      id: 3,
      name: 'oil',
      price: 300,
      count: 0,
    },
    {
      id: 4,
      name: 'apple',
      price: 400,
      count: 0,
    },
    {
      id: 5,
      name: 'carrot',
      price: 500,
      count: 0,
    },
    {
      id: 6,
      name: 'banana',
      price: 600,
      count: 0,
    },
    {
      id: 65,
      name: 'teeeeeest',
      price: 600,
      count: 0,
    },
  ];

  new Vue({
    el: '#app',
    data: {
      ingrArr: JSON.parse(localStorage.ingrCw7 || JSON.stringify(ingredients)),
    },
    methods: {
      add: function(item) { 
        item.count++;
      },
      remove: function(item) {
        item.count--;
      }
    },
    computed: {
      total__price: function() {
        let total = 0;
        this.ingrArr.forEach((el) => {
          if (el.count) {
            total += el.price * el.count;
          }
        });
        return total;
      },
    },
    watch: {
      ingrArr: {
        handler: (newVal) => {
          localStorage.ingrCw7 = JSON.stringify(newVal);
        },
        deep: true,
      },
    },
  });

}())