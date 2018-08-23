const data = {
  message: 'Hello World'
};

const vm = new Vue({
  el: '#app',
  data,
  methods: {
    buttonClick() {
      console.log(this.message);
    }
  }
});

console.log(vm.message);
