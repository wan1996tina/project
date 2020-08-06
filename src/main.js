import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import animated from 'animate.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import draggable from 'vuedraggable'
// 環形倒數套件
import VueEllipseProgress from 'vue-ellipse-progress'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './plugins/bootstrap-vue'
import './registerServiceWorker'
import './style/style.styl'
import './style/timer.styl'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from '../src/components/particle.vue'

import { faAngleRight, faPlus, faPlay, faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch, faPhone, faMapMarkerAlt, faArrowLeft, faArrowRight, faUserNinja, faUserAlt, faCheck, faPen, faTimes, faUndo, faSave, faPause, faStepForward, faListUl, faCog, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faFacebookSquare, faPinterestP, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faAngleRight, faPlus, faCheck, faPen, faTimes, faUndo, faSave, faPause, faStepForward, faListUl, faCog, faTrashAlt, faUserAlt, faUserNinja, faArrowRight, faArrowLeft, faPlay, faCoffee, faHome, faDumbbell, faInfoCircle, faStopwatch, faEnvelope, faPhone, faMapMarkerAlt, faFacebookF, faFacebookSquare, faPinterestP, faInstagram, faTwitter, faYoutube)

// 註冊元件
Vue.component('draggable', draggable)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VueParticles', VueParticles)
Vue.use(animated)
Vue.use(VueEllipseProgress, 'vep')
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

AOS.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
