import Vue from 'vue'

let State = new Vue({
  data: () => {
    return {
      ingrArr: JSON.parse(localStorage.ingrCw11 || JSON.stringify(Ingredients))
    }
  }
})

export default State;