import Vue from 'vue'
import Vuex from 'vuex'

import paquetes from './paquetes'

Vue.use(Vuex)

export default function() {
    const Store = new Vuex.Store({
        modules: {
            paquetes
        },

        strict: process.env.DEBUGGING
    })

    return Store
}