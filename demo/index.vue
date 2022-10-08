<template>
  <div>
    <Button @click="show" type="primary">text</Button>
    <div v-highlight>
      <pre>
        <code>
          DialogService({
            title: 'test',
            content: 'content',
            buttons: [
              {
                label: '取消',
                type: 'primary',
                onClick: ({ vm }) => {
                  vm.hide()
                },
              },
            ],
          })
        </code>
      </pre>
    </div>

    <Button @click="showVnode" type="primary">vnode</Button>
    <div v-highlight>
      <pre>
        <code>
          DialogService({
            title: 'vnode',
            content: &lt;Childern />,
            buttons: [
              {
                label: '取消',
                onClick: ({ vm }) => {
                  vm.hide()
                },
              },
              {
                label: '确定',
                type: 'primary',
                onClick: ({ vm, component }) => {
                  component.submit()
                },
              },
            ],
          })

          // childen.vue
           &lt;template>
             &lt;div>childern &lt;/div>
           &lt;/template>

           &lt;script>
            export default {
              methods: {
                submit() {
                  alert('submit')
                },
              },
            }
           &lt;/script>
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="jsx">
import DialogService from 'dialog-service'
import { Button } from 'element-ui'
import Childern from './childen.vue'

export default {
  components: { Button },
  data() {
    return {}
  },

  methods: {
    show() {
      DialogService({
        title: 'test',
        content: 'content',
        buttons: [
          {
            label: '取消',
            type: 'primary',
            onClick: ({ vm }) => {
              vm.hide()
            },
          },
        ],
      })
    },

    showVnode() {
      DialogService({
        title: 'vnode',
        content: <Childern />,
        buttons: [
          {
            label: '取消',
            onClick: ({ vm }) => {
              vm.hide()
            },
          },
          {
            label: '确定',
            type: 'primary',
            onClick: ({ vm, component }) => {
              component.submit()
            },
          },
        ],
      })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
