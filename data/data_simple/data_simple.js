const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  },
  methods: {
    buttonClick() {
      console.log(this.message);
    }
  }
});

console.log(vm.message);
