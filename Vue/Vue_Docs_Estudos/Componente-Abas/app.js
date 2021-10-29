const app = Vue.createApp({
    data() {
        return {
            currentTab: 'Pomodoro',
            tabs: ['Pomodoro', 'Pausa-curta', 'Pausa-longa']
        }
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})

app.component('tab-pomodoro', {
    template: `
        <div class="demo-tab">Pomodoro</div>
    `
})

app.component('tab-pausa-curta', {
    template: `
        <div class="demo-tab">Pausa curta</div>
    `
})

app.component('tab-pausa-longa', {
    template: `
        <div class="demo-tab">Pausa longa</div>
    `
})

app.mount('#app')