const app = Vue.createApp({})

app.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
        <button @click="count++">
            Você me clicou {{ count }} vezes.
        <button>`
})

app.mount('#components-demo')