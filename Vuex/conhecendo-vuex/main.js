const store = Vuex.createStore({
    state() {
        return {
            count: 1,
            msg: 'Vuex para estado global!',
            modo: 'claro',
            todos: [
                {id: 1, text: '...', done: true},
                {id: 2, text: '...', done: false},
                {id: 3, text: 'teste', done: true},
            ]
        }
    },
    getters: {
        getMsg(state) {
            return state.msg
        },
        getModo(state){
            return state.modo
        },
        getCount(state){
            return state.count
        },
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        mudarModo(state) {
            if (state.modo == 'claro') {
                state.modo = 'escuro'
            } else if (state.modo =='escuro') {
                state.modo = 'claro'
            }
        }
    }
})

const app = Vue.createApp({
    computed: {
        vuexMsg() {
            return this.$store.getters.getMsg
        },
        vuexModo() {
            return this.$store.getters.getModo
        },
        vuexCount(){
            return this.$store.getters.getCount
        },
        vuexDoneTodosCount() {
            return this.$store.getters.doneTodos
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        mudarModo(){
            this.$store.commit('mudarModo')
        }
    }
})

app.use(store).mount('#app')
