import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from "../views/TodoList";
import Layout from "../views/Layout";
import Register from "../views/Register";
import Login from "../views/Login";
// import Login from "../components/Login";
// import Register from "../components/Registration";

Vue.use(VueRouter)

const routes = [
    {
        path     : '',
        component: Layout,
        children : [
            {
                path     : '/',
                name     : 'home',
                component: Home,
                meta:{
                    title:'Home page'
                }
            },
            {
                path     : '/todo',
                name     : 'todo',
                component: TodoList,
                meta:{
                    title:'Todo page'
                }
            },
            {
                path     : '/register',
                name     : 'register',
                component: Register,
                meta:{
                    title:'Register page'
                }
            },
            {
                path     : '/login',
                name     : 'login',
                component: Login,
                meta:{
                    title:'Login page'
                }
            }
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title
    })
})

export default router
