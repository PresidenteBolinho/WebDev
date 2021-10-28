const vm = Vue.createApp({
    data() {
        return {
            classObject: {
                active: true,
                'text-danger': false
            },
            isActive: true,
            hasError: null,
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            }
        }
    },
    computed: {
        classObject1() {
            return {
                active: this.isActive && !this.hasError,
                'text-danger': this.hasError && this.hasError.type === 'fatal'
            }
        }
    },
}).mount('#app')

vm.component('my-component', {
    template: `<p class="foo bar">Oi!</p>`
})