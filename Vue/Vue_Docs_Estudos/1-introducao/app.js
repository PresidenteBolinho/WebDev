const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}

Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data() {
        return {
            message: 'Você carregou esta página em ' + Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')

const EventHandling = {
    data() {
        return {
            message: 'Olá Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}

Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
    data() {
        return {
            message: 'Olá Vue.js!'
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditionalRendering')

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Aprender JavaScript' },
                { text: 'Aprender Vue' },
                { text: 'Criar algo incrível' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')

// Cria uma aplicação Vue
const TodoList = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Vegetais' },
                { id: 1, text: 'Queijo' },
                { id: 2, text: 'Qualquer outra coisa que humanos podem comer' },
            ]
        }
    }
}

const app = Vue.createApp(TodoList)

// Define um novo componente chamado todo-item
app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})

// Monta a aplicação Vue
app.mount('#app')