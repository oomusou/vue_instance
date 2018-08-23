new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    add: () => {
      this.counter++;
      console.log(this);
    }
  }
});
