var app = new Vue({
  el: '#app',
  data: {
    messages: [
      { text: 'This is normal', error:false},
      { text: 'This is error', error:true}
    ]
  }
})