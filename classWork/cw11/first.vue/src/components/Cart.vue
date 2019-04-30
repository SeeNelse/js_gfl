<template>
  <div>
    <h1>Cart</h1>
      <ol>
        <li v-for="item in ingrArr" v-if="item.count" style="margin-bottom: 5px">
          <button type="button" @click="remove(item)">-</button>
          <span class="cart__name">{{ item.name }} x {{ item.count }}</span> - 
          <span class="cart__price">{{ item.price*item.count }}</span>
        </li>
      </ol>
      <span class="cart__total">Total: {{ total__price }}</span>
  </div>
</template>

<script>
import State from '@/store/State'
export default {
  data: () => {
    return {
      ingrArr: State.ingrArr
    }
  },
  methods: {
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
        localStorage.ingrCw11 = JSON.stringify(newVal);
      },
      deep: true,
    },
  },
}
</script>

<style>
</style>
