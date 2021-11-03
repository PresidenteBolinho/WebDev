/* * Primeira aplicação de abas
Por meio deste array, é criado uma lista de componentes. 
Eles tem seus próprios templates e nomes para identificação*/
const abas1 = [
    {
        name: 'Aba 1',
        component: {
            template: `
                <div class="demo-tab">Primeira Aba</div>
            `
        }
    },
    {
        name: 'Aba 2',
        component: {
            template: `
                <div class="demo-tab">Segunda Aba</div>
            `
        }
    },
    {
        name: 'Aba 3',
        component: {
            template: `
                <div class="demo-tab">Terceira Aba</div>
            `
        }
    }
]

// Criação da aplicação Vue
const app = Vue.createApp({
    data() {
        return {
            abaAtual: 'Aba 1',
            abas: ['Aba 1', 'Aba 2', 'Aba 3'],
            abas1,
            abaSelecionada: abas1[0],
            contador: 0
        }
    },
    computed: {
        currentTabComponent() {
            return 'aba-' + this.abaAtual.toLowerCase()
        }
    },
    mounted() {
        setInterval(() => {
            this.contador++
        })
    }
})

/* * Segunda aplicação de exemplo de abas
São criados componentes separadamente
*/
app.component('Aba1', {
    template: `
    <p>Primeira Aba</p>
    `
})

app.component('Aba2', {
    template: `
    <p>Segunda Aba</p>
    `
})

app.component('Aba3', {
    template: `
    <p>Terceira Aba</p>
    `
})

// Montagem da aplicação Vue no html
app.mount('#app')