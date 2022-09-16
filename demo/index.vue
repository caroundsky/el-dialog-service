<template>
  <div @click="show">11</div>
</template>

<script>
import DialogService from 'dialog-service'

export default {
  data() {
    return {}
  },

  methods: {
    show() {
      DialogService({
        title: '22',
        content: '内容',
        buttons: [
          {
            label: '11',
            type: 'primary',
          },
        ],
      })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
