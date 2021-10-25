const App = {
    data() {
        return {
            message: 'Ola é o caralho',
            contador: 10,
            contando: false
        }
    },
    computed: {
        
    }
}

Vue.createApp(App).mount('#app')