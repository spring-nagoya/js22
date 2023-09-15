var topComp = '<div>TOPだよ</div>';
var userComp = '<div>USERSです</div>';
var btnComp  = '<div>ボタン押した</div>';
var btnUserComp = '<div>{{ $route.params.userBtn }}</div>'
var errMsg   = '<div>未入力</div>';

var myRouter = new VueRouter(
    {
        routes:[
            {
                path: '/top',
                component: {
                template: topComp
            }
            },
            {
                path: '/users',
                component: httpVueLoader('./components/r05comp.vue')
            },
            {
                path: '/btn',
                component: {
                    template: btnComp
                }
            },
            {
                name: 'btnRoute',
                path: '/btn/:userBtn',
                component: httpVueLoader('./components/users.vue')
            },
            {
                path: '/error',
                component: httpVueLoader('./components/error.vue')
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
            btnClick: function(){
            if( this.inId == ''){
                 //未入力
                this.$router.push({ path: '/error' });
            }else{
                 //入力あり
                this.$router.push(
                    { name: 'btnRoute',
                    path: '/btn',
                    params: { userBtn: this.inId } });
                }
            }
        }
    }).$mount('#app');
