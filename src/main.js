import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import App from "./App.vue";
import NativeBack from "./plugin/nativeBack";

Vue.use(Vuesax);
Vue.use(NativeBack);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
