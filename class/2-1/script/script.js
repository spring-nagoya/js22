var topComp = '<div>TOPだよ</div>';
var userComp = '<div>USERSです</div>';
var btnComp = '<div>ボタン押した</div>';
var errMsg = '<div>未入力</div>';

var myRouter = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: topComp
      }
    },
    {
      path: '/btn',
      name: 'btnRoute',
      component: {
        template: "<div>{{$route.params.userBtn}}</div>"
      }
    },
    {
      path: '/users',
      component: {
        template: userComp
      }
    },
    {
      path: '/error',
      component: {
        template: errMsg
      }
    }
  ]
});

var app = new Vue(
  {
    router: myRouter,
    data: {
      inId: '',
    },
    methods: {
      btnClick: function () {
        if (!this.inId) {
          this.$router.push({ path: "/error" })
        }
        else {
          this.$router.push({
            name: 'btnRoute',
            path: "/btn",
            params: { userBtn: this.inId }
          })
        }
      }
    }
  }).$mount('#app');
