const store = Vuex.createStore({
    state() {
        return {
            count: 1,
            msg: 'Vuex para estado global!',
            modo: 'claro'
        }
    },
})

const app = Vue.createApp({
    computed: {
        vuexMsg() {
            return this.$store.state.msg
        },
        vuexModo() {
            return this.$store.state.modo
        },
        vuexCount(){
            return this.$store.state.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
        mudarModo(){

        }
    }
})

app.use(store).mount('#app')

store.commit('increment')

