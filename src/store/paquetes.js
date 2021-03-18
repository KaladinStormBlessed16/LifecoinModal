const state = {
    paquetes: [
        { valor: 1000, precio: 190, cantidad: 0 },
        { valor: 1500, precio: 270, cantidad: 0 },
        { valor: 3000, precio: 510, cantidad: 0 },
        { valor: 5000, precio: 800, cantidad: 0 },
        { valor: 10000, precio: 1500, cantidad: 0 },
        { valor: 20000, precio: 2800, cantidad: 0 }
    ]
}

const mutations = {}

const getters = {
    paquetes: (state) => {
        return state.paquetes
    }
}

export default {
    state,
    mutations,
    getters
}