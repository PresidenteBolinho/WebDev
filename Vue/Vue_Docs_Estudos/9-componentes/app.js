const app = Vue.createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'Minha jornada com Vue' },
                { id: 2, title: 'Escrevendo sobre o Vue' },
                { id: 3, title: 'Porquê Vue é tão divertido' }
            ],
            postFontSize: 1
        }
    }
})

app.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
        <button @click="count++">
            Você me clicou {{count}} vezes.
        </button>
    `
})

app.component('blog-post', {
    props: ['title'],
    emits: ['enlargeText', 'diminuirText'],
    template: `
        <h4>{{title}}</h4>
        <button @click="$emit('enlarge-text', 0.2)">Aumentar texto</button>
        <button @click="$emit('diminuir-text', 0.1)">Diminuir texto texto</button>
    `
})

app.component('custom-input', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    `
})

app.component('custom-input1', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <input v-model="value" />
    `,
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
})

app.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Erro!</strong>
            <slot></slot>
        </div>
    `
})

app.mount('#components-demo')