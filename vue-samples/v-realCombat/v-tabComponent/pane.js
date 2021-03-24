// 标签页嵌套的组件pane
Vue.component('pane',{
    name: 'pane',
    template:
    `
        <div class="pane" v-show="show">
            <slot></slot>
        </div>
    `,
    data() {
        return {
            show: true
        }
    },
    props:{
        name:{
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.updateNav();
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        },
        
    },
    watch: {
        label() {
            this.updateNav();
        }
    }
})