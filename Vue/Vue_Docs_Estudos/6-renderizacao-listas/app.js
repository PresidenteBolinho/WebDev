const app = Vue.createApp({
    data() {
        return {
            parentMessage: 'Pai',
            itens: [{ message: 'Vue', msg: 'Testando' }, { message: 'JavaScript', msg: 'Eu não sabia que tinha tudo isso.' }],
            myObject: {
                titulo: 'Como fazer listas no Vue',
                autor: 'Jane Doe',
                publicadoEm: '2020-03-22'
            },
            numbers: [1, 2, 3, 4, 5],
            sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],

            // todo app
            newTodoText: '',
            todos: [{
                id: 1,
                title: 'Lavar a louça'
            },
            {
                id: 2,
                title: 'Tirar o lixo'
            },
            {
                id: 3,
                title: 'Cortar a grama'
            }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        hello() {
            return alert("Hello!")
        },
        even(numeros) {
            return numeros.filter(numero => numero % 2 === 0)
        },

        // Todo app
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(number => number % 2 === 0)
        },
    }
})

app.component('todo-item', {
    template: `
        <li>
            {{ title }}
            <button @click="$emit('remove')">Remover</button>
        </li>
    `,
    props: ['title'],
    emits: ['remove']
})

app.mount('#app')