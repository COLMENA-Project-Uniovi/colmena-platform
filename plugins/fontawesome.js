import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
 
config.autoAddCss = false
 
library.add(fas)
library.add(far)
library.add(fad)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layer-text', FontAwesomeLayersText)
