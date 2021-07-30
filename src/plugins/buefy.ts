import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { faFontAwesome, faGit, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { fas, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// internal icons
// import { faUserSecret, faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
//   faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
//   faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";


// library.add(faUserSecret, faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
//     faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
//     faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faFontAwesome)
library.add(faFontAwesome, fas, faGit, faGithubSquare)

Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

// Vue.use(Buefy, {
//   defaultIconComponent: "vue-fontawesome",
//   defaultIconPack: "fas",
//   customIconPacks: {
//     fas: {
//       sizes: {
//         default: "lg",
//         "is-small": "1x",
//         "is-medium": "2x",
//         "is-large": "3x"
//       },
//       iconPrefix: ""
//     }
//   }
// });