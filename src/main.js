// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import App from "../src/App.vue";
import Vue from "vue";
import Argon from "./plugins/argon-kit";
Vue.config.productionTip = false;
Vue.use(Argon)
new Vue({
  render: (h) => h(App),
}).$mount("#app")
