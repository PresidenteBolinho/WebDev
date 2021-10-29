const app = Vue.createApp({
    data() {
        const duracaoPomodoro = 0.1 * 60;
        
        return {
            atualTempoSegundos: duracaoPomodoro,
            buttonText: 'Começar',
        }
    },
    methods: {
        handleButtonClick() {
            if (this.buttonText === "Começar" || this.buttonText === "Recomeçar")
                this.buttonText = "Pausa";
            else if (this.buttonText === "Pausa")
                this.buttonText = "Recomeçar"

            setInterval(() => {
                this.atualTempoSegundos -= 1;
            }, 1000)
        },
    },
    computed: {
        tempoRelogio() {
            const minutos = parseInt(this.atualTempoSegundos / 60);
            const segundos = this.atualTempoSegundos % 60;
            const minutosContados = ("0" + minutos).slice(-2);
            const segundosContados = ("0" + segundos).slice(-2);
            return `${minutosContados}:${segundosContados}`
        }
    }
})

app.mount('#app')
