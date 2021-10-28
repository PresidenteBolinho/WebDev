Vue.createApp({
    data() {
        return {
            counter: 0,
            name: 'Vue.js'
        }
    },
    methods: {
        greet(event) {
            alert('Olá ' + this.name + '!')
            if (event)
                alert(event.target.tagName)
        },
        say(message) {
            alert(message)
        },
        warn(message, event){
            if(event)
                event.preventDefault()
            
                alert(message)
        }
    }
}).mount('#app')