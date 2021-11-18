import { createApp, h } from 'vue'
import routes from './routes'

const RoutesSystem = {
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        ViewComponent() {
            const matchingPage = routes[this.currentRoute] || '404'
            return require(`./pages/${matchingPage}.vue`).default
        }
    },
    render() {
        return h(this.ViewComponent)
    },
    created() {
        window.addEventListener('popstate', ()=>{
            this.currentRoute = window.location.pathname
        })
    }
}

createApp(RoutesSystem).mount('#app')
