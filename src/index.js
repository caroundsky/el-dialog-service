import Vue from 'vue'
import Dialog from './index.vue'

let instance

const service = (options = {}) => {
  const dialogConstructor = Vue.extend(Dialog)

  const { store, asyncContent } = options
  instance = new dialogConstructor({
    data: options,
    components: {
      'async-content': asyncContent
    },
    store
  })
  const vm = instance.$mount()
  document.body.appendChild(vm.$el)
  vm.visible = true
  return vm
}

export default service
