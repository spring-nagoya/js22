var app = new Vue({
      el: '#app',
      data: {
            message: '',
            in_id: '',
      },
      methods: {
            btnClick: function(){
                  if(!this.in_id){
                        this.message = '未入力';
                  }
                  else{
                        this.message = '';
                  }
            }
      }
});