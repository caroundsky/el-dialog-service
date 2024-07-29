<!--
  在vite中使用vue2 的jsx语法要注明lang=jsx，但会有衍生问题，vscode无法识别代码的推断内容
-->
<script lang='jsx'>
  import { Dialog, Button } from 'element-ui'
  import 'element-ui/lib/theme-chalk/dialog.css'
  import 'element-ui/lib/theme-chalk/button.css'
  import 'element-ui/lib/theme-chalk/icon.css'

  import minscreen from './icon/minscreen.svg'
  import fullscreen from './icon/fullscreen.svg'

  import drag from './drag'
  
  import isPlainObject from 'lodash/isPlainObject'
  import isFunction from 'lodash/isFunction'
  
  export default {
    name: 'DialogService',
  
    directives: { drag },
  
    components: {
      'el-dialog': Dialog,
      'el-button': Button,
    },
  
    data() {
      return {
        /**
         * 可配置属性
         */
        visible: false,
        title: '提示',
        width: '520px',
        height: '',
        top: '15vh',
        zIndex: 1000,
        class: '',
        buttons: [],
        showClose: true,
        modal: true,
        canModalClose: false,
        fullscreen: false,
        fullScreenEnable: true,
        center: false,
  
        iframeLoading: false,
  
        asyncProps: {}, // 用于异步组件传递props
        asyncAttrs: {}, // 用于异步组件传递attrs
  
        content: '',
        renderContent: null,
        iframeSrc: '',
  
        afterOpen: null,
        afterClose: null,
        beforeClose: null,
  
        isVNode: data =>
          !Array.isArray(data) && !isPlainObject(data) && typeof data === 'object'
      }
    },
  
    watch: {
      fullscreen: function(val) {
        if (val) {
          this.height = '100%'
        } else {
          this.height = this._height
        }
      }
    },
  
    created() {
      // 做个备份
      this._height = this.height
  
      // 如果iframeSrc和（content 或 asyncContent）同时存在，去content，并提示不要这样使用
      if (this.iframeSrc && (this.content || this.asyncContent)) {
        console.error(
          'dialog：参数iframeSrc、（content 或 asyncContent）同时存在，请去除任一参数'
        )
      } else if (this.iframeSrc) {
        this.iframeLoading = true
      }
    },
  
    computed: {
      _buttons() {
        const { isVNode } = this
  
        if (isVNode(this.buttons)) {
          return this.buttons
        }
        if (isFunction(this.buttons)) {
          return (
            this.buttons.bind(this, {
              vm: this,
              component:
                this.renderContent.componentInstance || this.renderContent,
              getFooterBtns: this.setBtns
            })(this.$createElement) || []
          )
        }
  
        let buttons = []
        this.buttons.forEach(item => {
          if (typeof item === 'string') {
            console.warn('请传入正确的 buttons 参数')
          } else if (isPlainObject(item) || isFunction(item) || isVNode(item)) {
            buttons.push(item)
          }
        })
        return buttons
      }
    },
  
    render(h) {
      const contentType = typeof this.content
      const titleType = typeof this.title
      const { isVNode } = this
  
      let renderContent = null
      let renderTitle = null
  
      const renderContentGetter = {
        string: content => {
          if (/<.*?script.*?>.*?<\/.*?script.*?>/gi.test(content)) {
            // 有脚本攻击，转为实体字符
            console.error('content contains sensitive characters')
            return undefined
          } else {
            return content
          }
        },
        number: content => {
          return String(content)
        },
        object: content => {
          if (isVNode(content)) return content
          return undefined
        },
        function: content => {
          // 使用bind来修改传入外部的值
          return content.bind(this, this)(h)
        },
        undefined: () => {
          console.error('content is not return undefined')
          return undefined
        }
      }
  
      if (this.asyncContent) {
        // 用于import异步引入
        renderContent = (
          <async-content
            {...{ attrs: this.asyncAttrs }}
            {...{ props: this.asyncProps }}
          />
        )
      } else {
        renderContent = renderContentGetter[contentType](this.content)
      }
      renderTitle = renderContentGetter[titleType](this.title)
  
      if (!renderContent && this.iframeSrc) {
        renderContent = (
          <iframe
            src={this.iframeSrc}
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="auto"
            on-load={() => {
              this.iframeLoading = false
            }}
          />
        )
      }
  
      this.renderContent = renderContent
  
      const dialogListeners = {
        closed: this.handleCancel,
        opened: this.handleOpen,
        'update:visible': val => (this.visible = val)
      }
  
      return (
        <el-dialog
          v-drag
          ref="candy-dialog"
          class={[
            'candy-dialog',
            { fullscreen: this.fullscreen },
            { 'is-iframe': this.iframeSrc },
            this.class
          ]}
          visible={this.visible}
          width={this.width}
          top={this.top}
          zIndex={this.zIndex}
          center={this.center}
          showClose={this.showClose}
          modal={this.modal}
          closeOnClickModal={this.canModalClose}
          closeOnPressEscape={this.canModalClose}
          before-close={this.handleBeforeClose}
          fullscreen={this.fullscreen}
          {...{ on: dialogListeners }}
        >
          <template slot="title">
            {isVNode(renderTitle) ? (
              <div class="el-dialog__title">{renderTitle}</div>
            ) : (
              <span class="el-dialog__title" domPropsInnerHTML={this.title} />
            )}
            <div class="el-dialog__touch"></div>
            {this.fullScreenEnable && (
              <div
                class="el-dialog__icon"
                on-click={() => this.handleFullScreen()}
              >
                {this.fullscreen ? (
                  <img src={minscreen} />
                ) : (
                  <img src={fullscreen} />
                )}
              </div>
            )}
          </template>
          {isVNode(renderContent) ? (
            <div
              class="candy-dialog__content"
              v-loading={this.iframeLoading}
              style={{ height: this.height }}
            >
              {renderContent}
            </div>
          ) : (
            <div
              ref="content"
              class="candy-dialog__content"
              domPropsInnerHTML={renderContent}
              style={{ height: this.height }}
            />
          )}
  
          {isVNode(this._buttons) && (
            <div slot="footer" class="candy-dialog__footer">
              {this._buttons}
            </div>
          )}
  
          {!isVNode(this._buttons) && this._buttons.length !== 0 && (
            <div slot="footer" class="candy-dialog__footer">
              {this._buttons.map(item => {
                return this._renderButton(item)
              })}
            </div>
          )}
        </el-dialog>
      )
    },
  
    methods: {
      _renderButton(btn) {
        const { isVNode } = this
        if (isVNode(btn)) {
          return btn
        }
  
        if (isFunction(btn)) {
          return btn.bind(this, {
            vm: this,
            ctx: this._buttons,
            component: this.renderContent.componentInstance || this.renderContent
          })(this.$createElement)
        }
  
        const buttonListeners = { click: () => this.handleBtnClick(btn) }
  
        const { label, type, ...props } = btn
        return (
          <el-button
            props={props}
            type={type}
            size="small"
            {...{ on: buttonListeners }}
          >
            {label}
          </el-button>
        )
      },
  
      handleBtnClick(btn) {
        if (typeof btn.onClick === 'function') {
          btn.onClick({
            vm: this,
            ctx: btn,
            component: this.generateComponent(this.renderContent)
          })
        }
      },
      setBtns(cb) {
        setTimeout(() => {
          cb && (this.buttons = cb(this.renderContent.componentInstance))
        })
      },
  
      generateComponent(vm) {
        if (typeof vm === 'string') {
          return this.$refs['content']
        } else if (typeof vm === 'object') {
          return this.renderContent.componentInstance || this.renderContent
        }
      },
  
      handleFullScreen() {
        this.fullscreen = !this.fullscreen
        this.$refs['candy-dialog'].$el.querySelector(
          '.el-dialog'
        ).style.transform = 'translate(0px, 0px)'
      },
  
      close() {
        if (isFunction(this.beforeClose)) {
          this.beforeClose(this, this.hide)
        } else {
          this.hide()
        }
      },
  
      hide() {
        this.visible = false
      },
  
      destroy() {
        document.body.removeChild(this.$el)
        this.$destroy()
      },
  
      handleOpen() {
        isFunction(this.afterOpen) && this.afterOpen(this)
      },
  
      handleCancel() {
        isFunction(this.afterClose) && this.afterClose(this)
        this.destroy()
      },
  
      handleBeforeClose(done) {
        if (isFunction(this.beforeClose)) {
          this.beforeClose(this, done)
        } else {
          done()
        }
      }
    }
  }
  </script>
  
  <style lang="less">
.candy-dialog {
  .el-dialog {
    max-width: 90%;
    &--center .el-dialog__title {
      left: 50% !important;
      transform: translateX(-50%);
    }
  }
  .el-dialog__touch {
    padding: 10px 15px;
    height: 24px;
    box-sizing: content-box;
  }
  .el-dialog__header {
    border-bottom: 1px solid #ebeef5;
    padding: 0;
    .el-dialog__title {
      font-size: 16px;
      position: absolute;
      top: 11px;
      left: 20px;
    }
    .el-dialog__icon {
      position: absolute;
      right: 36px;
      top: 14px;
      line-height: 1;
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
      & > img {
        width: 1em;
        height: 1em;
      }
    }
    .el-dialog__headerbtn {
      top: 15px;
      right: 13px;
      & > i {
        color: #333;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
    color: #333;
  }
  .el-dialog__footer {
    padding: 10px 20px;
    border-top: 1px solid #ebeef5;
  }

  .el-dialog {
    &.is-fullscreen {
      max-width: initial;
      display: flex;
      flex-direction: column;

      .el-dialog__body {
        flex-grow: 1;
        overflow: auto;
      }
    }
  }

  &.is-iframe {
    .candy-dialog__content {
      padding: 0;
      line-height: 0;
    }
  }
  &__content {
    line-height: 1.4;
    box-sizing: border-box;
    overflow: auto;
  }
  &__footer {
    & > * {
      display: inline-block;
    }
  }
}
</style>
  