export default {
  bind: el => {
    el.style.overflow = 'hidden'

    const dom = el.querySelector('.el-dialog__touch')
    const dragDom = el.querySelector('.el-dialog')

    dom.style.cursor = 'move'

    dom.onmousedown = function(e) {
      e.preventDefault()

      // 如果dialog内是iframe，阻止其所有事件，优化性能
      const iframe = dragDom.querySelector('iframe')
      if (iframe) iframe.style.pointerEvents = 'none'

      const domL = e.clientX
      const domT = e.clientY

      const maxLeft = dragDom.offsetLeft
      const maxTop = dragDom.offsetTop
      const maxBottom = window.innerHeight - maxTop - dragDom.offsetHeight

      let [transformX, transformY] = dragDom.style.transform.match(
        /(-?[0-9]+)/g
      ) || ['0', '0']
      if (transformY === undefined) {
        transformY = '0'
      }

      document.onmousemove = function(e) {
        let l = parseInt(transformX) + e.clientX - domL
        let t = parseInt(transformY) + e.clientY - domT

        if (Math.abs(l) >= maxLeft) {
          l = l > 0 ? maxLeft : -maxLeft
        }
        if (t <= -maxTop) {
          t = -maxTop
        }
        if (t >= maxBottom) {
          t = maxBottom
        }

        dragDom.style.transform = `translate(${l}px, ${t}px)`
      }

      document.onmouseup = function() {
        document.onmousemove = null
        if (iframe) iframe.style.pointerEvents = 'auto'
      }
    }
  },
  componentUpdated: (el, binding, vnode) => {
    const dragDom = el.querySelector('.el-dialog')
    if (!vnode.componentInstance.visible) {
      setTimeout(() => {
        dragDom.style.transform = `translate(0px, 0px)`
      }, 300)
    }
  }
}
