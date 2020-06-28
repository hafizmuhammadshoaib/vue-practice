import HelloWorld from "./components/HelloWorld.vue"
import DataComponent from "./components/DataComponent.vue"
import VueRouter from "vue-router"
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/data', component: DataComponent }
]

export const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
})

