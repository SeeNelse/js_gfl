<template>
  <div class="catalog">
    <h1>Shop</h1>
      <ol>
        <li v-for="item in ingrArr" style="margin-bottom: 5px">
          <button type="button" @click="add(item)">+</button>
          <span class="catalog__name" >{{ item.name }}</span> - 
          <span class="catalog__price">{{ item.price }}</span>
        </li>
      </ol>
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
    add: function(item) {
      item.count++;
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
