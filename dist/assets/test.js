(function(window) {
  function customerFun () {
    console.log('customerFun');
  }
  window.customerFun = customerFun;
})(window !== undefined ? window : global);