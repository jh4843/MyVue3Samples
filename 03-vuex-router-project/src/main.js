import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import OnoffToggle from "vue-onoff-toggle"

const app = createApp(App);

//app.use(OnoffToggle)

//app.component("OnoffToggle", OnoffToggle);

//app.use(store).use(router).use(OnoffToggle).mount("#app");
app.use(store).use(router).mount("#app");
