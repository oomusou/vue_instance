new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0
  },
  computed: {
    sum() {
      return parseInt(this.x) + parseInt(this.y);
    }
  }
});
