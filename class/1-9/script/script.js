var app = new Vue({
      el: '#app',
      data: {
            count: 0
      },
      methods: {
            fncClick: function(){
                  this.count++;
            }
      }
});