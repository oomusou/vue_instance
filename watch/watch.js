new Vue({
  el: '#app',
  data: {
    userName: '',
    errorMessage: ''
  },
  watch: {
    userName(value) {
      this.errorMessage = (this.isValid(value)) ? '' : '使用者名稱開頭不可為數字';
    }
  },
  methods: {
    isValid(name) {
      return !(/^[0-9]/.test(name));
    }
  }
});
