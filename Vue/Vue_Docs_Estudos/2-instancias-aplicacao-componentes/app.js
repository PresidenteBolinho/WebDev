const app = Vue.createApp({
    data() {
        return {
            count: 4
        }
    },
    created() {
        console.log('count is: ' + this.count)
    },
    methods: {
        increment() {
            this.count++
            console.log(this.count)
        }
    }
})

const vm = app.mount('#app')

console.log(vm.$data.count)
console.log(vm.count)

vm.count = 5
console.log(vm.$data.count)

vm.$data.count = 6
console.log(vm.$data.count)

console.log(vm.count)