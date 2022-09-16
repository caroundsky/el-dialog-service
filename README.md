# el-dialog-service 弹窗服务

## 说明

此服务将 el-dialog 做二次封装，以服务的形式调用；

服务依赖于宿主项目的element-ui版本，"element-ui": "2.x", "vue": "2.x"。

* 安装

```bash
yarn add @caroundsky/el-dialog-service
```

* 使用

```js
// 可将其挂载到vue原型下，方便全局调用
// main.js
import DialogService from '@caroundsky/el-dialog-service'

Vue.prototype.$dialogService = DialogService

// 挂载全局时需要获得类型提示，需要配置d.ts文件声明
// types/vue.d.ts
import DialogService from 'el-dialog-service'

declare module 'vue/types/vue' {
  interface Vue {
    $dialogService: typeof DialogService
  }
}

// xx.vue
this.$dialogService(
  {
    title: '标题',
    content: '内容',
    buttons: [
      {
        label: '取消',
        type: 'primary',
        onClick: ({ vm }) => {
          vm.hide()
        },
      },
    ],
  }
)
```

## Props

| 参数 | 类型 | Required | 说明 |
| --- | --- | --- | --- |
| title | string\|fn\|vNode | true | 标题，可返回jsx进行自定义布局 |
| width | string | false | 宽度 |
| height | string | false | 高度，建议用vh做单位达到自适应效果 |
| top | string | 15vh | 距离顶部 |
| class | string | -  | 自定义类名 |
| zIndex | number | 1000  |  |
| showClose | boolean | true  | 展示关闭按钮 |
| center | boolean | false  | 居中布局 |
| content | string\|fn\|VNode | false | 内容,与下方的 iframeSrc 二选一，内容的padding自行控制，组件本身不提供默认边距 |
| asyncContent | - | false | 异步import组件 优先级最高 |
| asyncAttrs | - | false | 给异步import组件传参 |
| asyncProps | - | false | 给异步import组件传参 |
| iframeSrc | string | false | iframe 地址 |
| fullscreen | boolean | false | 默认最大化打开，与下方的 Enable 二选一 |
| fullScreenEnable | boolean | false | 允许最大化 |
| buttons | array<br>fn<br>Vnode | false | `Array`：[ { label, type, onClick }, () => { return JSX },... ]<br><br> `label`：按钮名<br>`type`：类型 primary / success / warning / danger / info / text<br>`...attrs`: 与 [el-button](https://element.eleme.cn/#/zh-CN/component/button#attributes) 一致<br>`onClick`: function({ vm, ctx, component }) {}；<br><br>vm：弹窗实例，可使用 vm.close() 或者 vm.hide() 关闭弹窗， 执行close会触发beforeClose<br>ctx：按钮上下文<br> component： content 实例<br><br>`Fn`：<br>({ vm, component, getFooterBtns }) => {  返回Array / JSX }<br>如果想通过content组件本身来生成按钮，可以使用`getFooterBtns`参数，会携带组件实例，通过调用实例的自定义方法，该方法返回上述的Array或者Vnode即可<br>`return getFooterBtns(cont => cont['自定义方法']())`|
|beforeClose|fn|false|关闭前执行，此方法会阻止弹窗关闭，(vm, done) => {}|
|afterOpen|fn|false|打开后执行，(vm) => {}|
|afterClose|fn|false|关闭后执行，(vm) => {}|
|store| - |false|服务不含$store实例，如果需要在弹窗内使用，在外部传入store实例，如`store: this.$store`|
