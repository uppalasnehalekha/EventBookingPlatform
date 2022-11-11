import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
// import 'mdb-vue-ui-kit/css/mdb.min.css';
import * as mdbvue from 'mdb-vue-ui-kit'
import router from './router/index.js'



const app = createApp(App )
app.use(router)
app.use(BootstrapVue3)
app.component('BootstrapIcon', BootstrapIcon);

for (const component in mdbvue) {
    app.component(component, mdbvue[component])
}
app.mount('#app')




