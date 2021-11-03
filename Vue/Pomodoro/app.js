const pomodoro = Vue.createApp({
    data() {
        const pomodoroTempo = 0.1 * 60;
        const pausaCurta = 5 * 60;
        const pausaLonga = 15 * 60;

        return {
            pomodoroTempo,
            pausaCurta,
            pausaLonga,
            tempoAtual: pomodoroTempo,
            textoBotao: "Começar!",
            intervalo: null
        }
    },
    methods: {
        tempoDePomodoro() {
            this.tempoAtual = this.pomodoroTempo
        },
        tempoDePausaCurta() {
            this.tempoAtual = this.pausaCurta
        },
        tempoDePausaLonga() {
            this.tempoAtual = this.pausaLonga
        },
        cronometrar() {
            if (this.textoBotao === "Começar!" || this.textoBotao === "Recomeçar") {
                this.reducaoDoTempo()
                this.textoBotao = "Pausa"
            } else if (this.textoBotao === "Pausa") {
                this.paradaDoTempo()
                this.textoBotao = "Recomeçar"
            }
        },
        reducaoDoTempo() {
            this.intervalo = setInterval(() => {
                if (this.tempoAtual > 0) {
                    this.tempoAtual -= 1;
                }
            }, 1000)
        },
        paradaDoTempo() {
            clearInterval(this.intervalo)
        },
        concluido() {
            if (this.tempoAtual <= 0) {
                // Clear interval
                clearInterval(this.intervalo);

                // Immediately disable button and set state
                this.textoBotao = "Começar!";
            }
        }
    },
    computed: {
        relogio() {
            const minutos = String(parseInt(this.tempoAtual / 60));
            const segundos = String(parseInt(this.tempoAtual % 60));
            const minutosRestantes = ("0" + minutos).slice(-2);
            const segundosRestantes = ("0" + segundos).slice(-2);

            return `${minutosRestantes}:${segundosRestantes}`
        }
    }
})

pomodoro.mount('#app')