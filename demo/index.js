import Vue from 'vue'
import App from './index.vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  render: (h) => {
    return h(App)
  },
}).$mount('#app')
