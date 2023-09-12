var topComp = '<div>TOPだよ</div>';
var userComp = '<div>USERSです</div>';
var btnComp  = '<div>ボタン押した</div>';
var errMsg   = '<div>未入力</div>';

//ルーティング定義
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
                component: httpVueLoader('./script/r05comp.vue')
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
                component: {
                template: '<div>{{ $route.params.userBtn }}</div>'
                }
            },
            {
                path: '/error',
                component: httpVueLoader('./script/kadai5.vue')
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
