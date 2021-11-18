const app = Vue.createApp({
    data() {
        return {
            message: 'Vamos começar'
        }
    }
})

app.component('navigation-bar', {
    template: `
        <header>
            <ul>
                <li>principal</li>
                <li>Sobre</li>
                <li>Trabalhos</li>
            </ul>
        </header>
    `
})

app.component('principal', {
    template: `
        <section>

        </section>
    `
})

app.mount('#app')
