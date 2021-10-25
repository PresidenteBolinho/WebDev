Vue.createApp({
    data() {
        return {
            autor: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Guia Avançado ',
                    'Vue 3 - Guia Básico',
                    'Vue 4 - O Mistério'
                ]
            }
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                const names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
}).mount('#computed-basics')

const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Foo',
            lastName: 'Bar',
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
}).mount('#demo')