import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'
import createLogger from 'vuex/dist/logger'
import todoModule from "./modules/todo-module";


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        todoModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})