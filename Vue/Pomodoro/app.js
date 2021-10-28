const app = Vue.createApp({
    data() {
        return {
            message: 'Ola é o caralho',
            contador: 10,
            contando: false,
                newTodoText: '',
                todos: [{
                    id: 1,
                    title: 'Teste o todo do pomodoro'
                }],
                nexTodoId: 2
        }
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nexTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

app.component('todo-list', {
    template: `
        <h1>Todo List</h1>
        <div>
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Adicionar tarefa:</label>
                <input
                    v-model="newTodoText"
                    id="new-todo"
                    placeholder="Ex.: Alimentar o gato"
                />
                <button>Adicionar</button>
            </form>
            <ul>
            <todo-item
                v-for="(todo, index) in todos"
                :key="todo.id"
                :title="todo.title"
                @remove="todos.splice(index, 1)"
            ></todo-item>
        </ul>
        </div>
    `
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
