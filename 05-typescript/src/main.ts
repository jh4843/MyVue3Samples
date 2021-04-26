import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const myApp = createApp(App);

//myApp.use(Button).use(Alert).use(Switch)

myApp.use(store).use(router).mount('#app')
