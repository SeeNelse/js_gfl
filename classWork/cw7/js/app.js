(function(){

  let ingredients = [
    {
      id: 1,
      name: 'milk',
      price: 100,
    },
    {
      id: 2,
      name: 'bread',
      price: 200,
    },
    {
      id: 3,
      name: 'oil',
      price: 300,
    },
    {
      id: 4,
      name: 'apple',
      price: 400,
    },
    {
      id: 5,
      name: 'carrot',
      price: 500,
    },
    {
      id: 6,
      name: 'banana',
      price: 600,
    },
    {
      id: 65,
      name: 'teeeeeest',
      price: 600,
    },
  ];

  new Vue({
    el: '#app',
    data: function() {
      return {
        ingrArr: ingredients,
        cart: JSON.parse(localStorage.cart || '[]'),
        cartArr: [],
      }
    },
    methods: {
      add: function (key, item) { 
        let _this = this;
        if (!Object.keys(this.cart).length) {
          this.ingrArr.forEach(function(el) {
            this.cartArr[el.id]
          });
          console.log(this.cartArr);
        }
        console.log(this.cartArr);

        // this.cart['id-'+item.id] ? this.cart['id-'+item.id]++ : this.cart['id-'+item.id] = 1;
        // for (key in this.cart) {
        //   this.ingrArr.forEach(el => {
        //     if (el.id === +key.substring(3)) {
        //       el['count'] = this.cart['id-'+item.id];
        //       if (el['count'] === 1) {
        //         this.cartArr.push(el);
        //       }
        //       console.log(el['count']);
        //     }
        //   });
        // }
      },
    },
    watch: {
      cart: function(newVal) {
        localStorage.cart = JSON.stringify(newVal);
      }
    }
  });

}())