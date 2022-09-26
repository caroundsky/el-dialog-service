(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".candy-dialog .el-dialog{max-width:90%}.candy-dialog .el-dialog--center .el-dialog__title{left:50%!important;transform:translate(-50%)}.candy-dialog .el-dialog__touch{padding:10px 15px;height:24px;box-sizing:content-box}.candy-dialog .el-dialog__header{border-bottom:1px solid #ebeef5;padding:0}.candy-dialog .el-dialog__header .el-dialog__title{font-size:16px;position:absolute;top:11px;left:20px}.candy-dialog .el-dialog__header .el-dialog__icon{position:absolute;right:36px;top:14px;line-height:1;cursor:pointer}.candy-dialog .el-dialog__header .el-dialog__icon:hover{color:#409eff}.candy-dialog .el-dialog__header .el-dialog__icon>img{width:1em;height:1em}.candy-dialog .el-dialog__header .el-dialog__headerbtn{top:15px;right:13px}.candy-dialog .el-dialog__header .el-dialog__headerbtn>i{color:#333}.candy-dialog .el-dialog__body{padding:0;color:#333}.candy-dialog .el-dialog__footer{padding:10px 20px;border-top:1px solid #ebeef5}.candy-dialog .el-dialog.is-fullscreen{max-width:initial;display:flex;flex-direction:column}.candy-dialog .el-dialog.is-fullscreen .el-dialog__body{flex-grow:1;overflow:auto}.candy-dialog.is-iframe .candy-dialog__content{padding:0;line-height:0}.candy-dialog__content{line-height:1.4;box-sizing:border-box;overflow:auto}.candy-dialog__footer>*{display:inline-block}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import Vue from "vue";
import { Dialog as Dialog$1, Button } from "element-ui";
import "element-ui/lib/theme-chalk/dialog.css";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/icon.css";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(a) {
    for (var b, c = 1; c < arguments.length; c++)
      for (var d in b = arguments[c], b)
        Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    return a;
  }, _extends.apply(this, arguments);
}
var normalMerge = ["attrs", "props", "domProps"], toArrayMerge = ["class", "style", "directives"], functionalMerge = ["on", "nativeOn"], mergeJsxProps = function(a) {
  return a.reduce(function(c, a2) {
    for (var b in a2)
      if (!c[b])
        c[b] = a2[b];
      else if (-1 !== normalMerge.indexOf(b))
        c[b] = _extends({}, c[b], a2[b]);
      else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]], e = a2[b] instanceof Array ? a2[b] : [a2[b]];
        c[b] = [].concat(d, e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a2[b])
          if (c[b][f]) {
            var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]], h = a2[b][f] instanceof Array ? a2[b][f] : [a2[b][f]];
            c[b][f] = [].concat(g, h);
          } else
            c[b][f] = a2[b][f];
      } else if ("hook" === b)
        for (var i in a2[b])
          c[b][i] = c[b][i] ? mergeFn(c[b][i], a2[b][i]) : a2[b][i];
      else
        c[b] = a2[b];
    return c;
  }, {});
}, mergeFn = function(a, b) {
  return function() {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};
var helper = mergeJsxProps;
var minscreen = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwMDc4MjA1MDAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwNTIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1Mjc0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEzMS41IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMC42NjYxMDMgMjkwLjA3NDQ5NG02Ni42MTAyOTEgMGw2MDAuMDM4ODIxIDBxNjYuNjEwMjkxIDAgNjYuNjEwMjkxIDY2LjYxMDI5MWwwIDYwMC4wMzg4MjFxMCA2Ni42MTAyOTEtNjYuNjEwMjkxIDY2LjYxMDI5MWwtNjAwLjAzODgyMSAwcS02Ni42MTAyOTEgMC02Ni42MTAyOTEtNjYuNjEwMjkxbDAtNjAwLjAzODgyMXEwLTY2LjYxMDI5MSA2Ni42MTAyOTEtNjYuNjEwMjkxWiIgZmlsbD0iIzY2NjY2NiIgcC1pZD0iMTUyNzUiPjwvcGF0aD48cGF0aCBkPSJNOTg1LjI1OTQ1NSAwLjY3OTQyNWgtNjAwLjAyNTQ5OWE2Ni42MTAyOTEgNjYuNjEwMjkxIDAgMCAwLTY2LjYxMDI5MSA2Ni42MTAyOTF2MTUxLjg3MTQ2M2g0MTguNTM5MTAxYTY2LjYxMDI5MSA2Ni42MTAyOTEgMCAwIDEgNjYuNjEwMjkxIDY2LjYxMDI5djQ0OC4xNTQwMzdoMTgxLjQ4NjM5OGE2Ni42MTAyOTEgNjYuNjEwMjkxIDAgMCAwIDY2LjYxMDI5MS02Ni42MTAyOTFWNjcuMjg5NzE2YTY2LjYxMDI5MSA2Ni42MTAyOTEgMCAwIDAtNjYuNjEwMjkxLTY2LjYxMDI5MXoiIGZpbGw9IiM2NjY2NjYiIHAtaWQ9IjE1Mjc2Ij48L3BhdGg+PC9zdmc+";
var fullscreen = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwMDc3NjI5NTcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3OTMiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzQxLjQ2OCA1NjkuMTQ2SDE3My40OGMtNjEuNzY2IDAtMTExLjk5MiA1MC4yMjgtMTExLjk5MiAxMTEuOTkzdjE2Ny45ODdjMCA2MS43NjcgNTAuMjI2IDExMS45OTQgMTExLjk5MiAxMTEuOTk0aDE2Ny45OWM2MS43MzcgMCAxMTEuOTkyLTUwLjIyNyAxMTEuOTkyLTExMS45OTRWNjgxLjE0Yy0wLjAwMS02MS43NjUtNTAuMjU2LTExMS45OTMtMTExLjk5NC0xMTEuOTkzeiBtNTUuOTk2IDI3OS45OGMwIDMwLjg3LTI1LjEyNyA1NS45OTctNTUuOTk2IDU1Ljk5N0gxNzMuNDhjLTMwLjg5NiAwLTU1Ljk5NS0yNS4xMjUtNTUuOTk1LTU1Ljk5N1Y2ODEuMTRjMC0zMC44NyAyNS4wOTktNTUuOTk4IDU1Ljk5NS01NS45OThoMTY3Ljk5YzMwLjg2OCAwIDU1Ljk5NSAyNS4xMjggNTUuOTk1IDU1Ljk5OHYxNjcuOTg3eiBtMTMxLjc4OC0zMTYuMThMNzYxLjQ0IDMwMC43NTl2MTg0LjM5M2MwIDE1LjQ3NSAxMi41MjMgMjcuOTk5IDI3Ljk5OCAyNy45OTkgMTUuNDQ5IDAgMjcuOTk5LTEyLjUyNCAyNy45OTktMjhWMjMzLjE3YzAtMTUuNDc1LTEyLjU1LTI3Ljk5Ny0yNy45OTktMjcuOTk3SDUzNy40NTVjLTE1LjQ3NiAwLTI3Ljk5OSAxMi41MjItMjcuOTk5IDI3Ljk5NyAwIDE1LjQ3NiAxMi41MjMgMjcuOTk4IDI3Ljk5OSAyNy45OThoMTg0LjM5Mkw0ODkuNjYgNDkzLjM1NWMtMTAuOTM2IDEwLjkzNi0xMC45MzYgMjguNjU0IDAgMzkuNTlhMjcuOTEgMjcuOTEgMCAwIDAgMTkuNzk2IDguMjAzIDI3LjkxIDI3LjkxIDAgMCAwIDE5Ljc5Ni04LjIwMnogbTMxNi4xOC00NjcuNzY0SDE3My40OGMtNjEuNzY2IDAtMTExLjk5MiA1MC4yMjctMTExLjk5MiAxMTEuOTkydjMwNy45NzljMCAxNS40NzUgMTIuNTIzIDI3Ljk5OSAyNy45OTggMjcuOTk5IDE1LjQ0OCAwIDI3Ljk5OS0xMi41MjQgMjcuOTk5LTI4VjE3Ny4xNzZjMC0zMC44NyAyNS4wOTktNTUuOTk3IDU1Ljk5NS01NS45OTdoNjcxLjk1M2MzMC44NyAwIDU1Ljk5NyAyNS4xMjggNTUuOTk3IDU1Ljk5N3Y2NzEuOTUyYzAgMzAuODctMjUuMTI4IDU1Ljk5Ny01NS45OTcgNTUuOTk3SDUzNy40NTVjLTE1LjQ3NiAwLTI3Ljk5OSAxMi41MjMtMjcuOTk5IDI3Ljk5OCAwIDE1LjQ3NyAxMi41MjMgMjggMjcuOTk5IDI4aDMwNy45NzhjNjEuNzM4IDAgMTExLjk5My01MC4yMjcgMTExLjk5My0xMTEuOTk0VjE3Ny4xNzRjMC02MS43NjYtNTAuMjU1LTExMS45OTItMTExLjk5My0xMTEuOTkyeiIgcC1pZD0iNDc5NCIgZmlsbD0iIzMzMzMzMyI+PC9wYXRoPjwvc3ZnPg==";
var drag = {
  bind: (el) => {
    el.style.overflow = "hidden";
    const dom = el.querySelector(".el-dialog__touch");
    const dragDom = el.querySelector(".el-dialog");
    dom.style.cursor = "move";
    dom.onmousedown = function(e) {
      e.preventDefault();
      const iframe = dragDom.querySelector("iframe");
      if (iframe)
        iframe.style.pointerEvents = "none";
      const domL = e.clientX;
      const domT = e.clientY;
      const maxLeft = dragDom.offsetLeft;
      const maxTop = dragDom.offsetTop;
      const maxBottom = window.innerHeight - maxTop - dragDom.offsetHeight;
      let [transformX, transformY] = dragDom.style.transform.match(
        /(-?[0-9]+)/g
      ) || ["0", "0"];
      if (transformY === void 0) {
        transformY = "0";
      }
      document.onmousemove = function(e2) {
        let l = parseInt(transformX) + e2.clientX - domL;
        let t = parseInt(transformY) + e2.clientY - domT;
        if (Math.abs(l) >= maxLeft) {
          l = l > 0 ? maxLeft : -maxLeft;
        }
        if (t <= -maxTop) {
          t = -maxTop;
        }
        if (t >= maxBottom) {
          t = maxBottom;
        }
        dragDom.style.transform = `translate(${l}px, ${t}px)`;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        if (iframe)
          iframe.style.pointerEvents = "auto";
      };
    };
  },
  componentUpdated: (el, binding, vnode) => {
    const dragDom = el.querySelector(".el-dialog");
    if (!vnode.componentInstance.visible) {
      setTimeout(() => {
        dragDom.style.transform = `translate(0px, 0px)`;
      }, 300);
    }
  }
};
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal || freeSelf || Function("return this")();
var _root = root$1;
var root = _root;
var Symbol$3 = root.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
var nativeObjectToString$1 = objectProto$2.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$1 = Object.prototype;
var nativeObjectToString = objectProto$1.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$2;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var getPrototype$1 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag$1(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$1;
var baseGetTag = _baseGetTag, isObject = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;
var __vue2_script = {
  name: "DialogService",
  directives: {
    drag
  },
  components: {
    "el-dialog": Dialog$1,
    "el-button": Button
  },
  data() {
    return {
      visible: false,
      title: "\u63D0\u793A",
      width: "520px",
      height: "",
      top: "15vh",
      zIndex: 1e3,
      class: "",
      buttons: [],
      showClose: true,
      canModalClose: false,
      fullscreen: false,
      fullScreenEnable: true,
      center: false,
      iframeLoading: false,
      asyncProps: {},
      asyncAttrs: {},
      content: "",
      renderContent: null,
      iframeSrc: "",
      afterOpen: null,
      afterClose: null,
      beforeClose: null,
      isVNode: (data) => !Array.isArray(data) && !isPlainObject_1(data) && typeof data === "object"
    };
  },
  watch: {
    fullscreen: function(val) {
      if (val) {
        this.height = "100%";
      } else {
        this.height = this._height;
      }
    }
  },
  created() {
    this._height = this.height;
    if (this.iframeSrc && (this.content || this.asyncContent)) {
      console.error("dialog\uFF1A\u53C2\u6570iframeSrc\u3001\uFF08content \u6216 asyncContent\uFF09\u540C\u65F6\u5B58\u5728\uFF0C\u8BF7\u53BB\u9664\u4EFB\u4E00\u53C2\u6570");
    } else if (this.iframeSrc) {
      this.iframeLoading = true;
    }
  },
  computed: {
    _buttons() {
      const {
        isVNode
      } = this;
      if (isVNode(this.buttons)) {
        return this.buttons;
      }
      if (isFunction_1(this.buttons)) {
        return this.buttons.bind(this, {
          vm: this,
          component: this.renderContent.componentInstance || this.renderContent,
          getFooterBtns: this.setBtns
        })(this.$createElement) || [];
      }
      let buttons = [];
      this.buttons.forEach((item) => {
        if (typeof item === "string") {
          console.warn("\u8BF7\u4F20\u5165\u6B63\u786E\u7684 buttons \u53C2\u6570");
        } else if (isPlainObject_1(item) || isFunction_1(item) || isVNode(item)) {
          buttons.push(item);
        }
      });
      return buttons;
    }
  },
  render(h) {
    const contentType = typeof this.content;
    const titleType = typeof this.title;
    const {
      isVNode
    } = this;
    let renderContent = null;
    let renderTitle = null;
    const renderContentGetter = {
      string: (content) => {
        if (/<.*?script.*?>.*?<\/.*?script.*?>/gi.test(content)) {
          console.error("content contains sensitive characters");
          return void 0;
        } else {
          return content;
        }
      },
      number: (content) => {
        return String(content);
      },
      object: (content) => {
        if (isVNode(content))
          return content;
        return void 0;
      },
      function: (content) => {
        return content.bind(this, this)(h);
      },
      undefined: () => {
        console.error("content is not return undefined");
        return void 0;
      }
    };
    if (this.asyncContent) {
      renderContent = h("async-content", {
        "attrs": {
          ...this.asyncAttrs
        },
        "props": {
          ...this.asyncProps
        }
      });
    } else {
      renderContent = renderContentGetter[contentType](this.content);
    }
    renderTitle = renderContentGetter[titleType](this.title);
    if (!renderContent && this.iframeSrc) {
      renderContent = h("iframe", {
        "attrs": {
          "src": this.iframeSrc,
          "width": "100%",
          "height": "100%",
          "frameborder": "0",
          "scrolling": "auto"
        },
        "on": {
          "load": () => {
            this.iframeLoading = false;
          }
        }
      });
    }
    this.renderContent = renderContent;
    const dialogListeners = {
      closed: this.handleCancel,
      opened: this.handleOpen,
      "update:visible": (val) => this.visible = val
    };
    return h("el-dialog", {
      "directives": [{
        name: "drag",
        value: true
      }],
      "ref": "candy-dialog",
      "class": ["candy-dialog", {
        fullscreen: this.fullscreen
      }, {
        "is-iframe": this.iframeSrc
      }, this.class],
      "attrs": {
        "visible": this.visible,
        "width": this.width,
        "top": this.top,
        "zIndex": this.zIndex,
        "center": this.center,
        "showClose": this.showClose,
        "closeOnClickModal": this.canModalClose,
        "closeOnPressEscape": this.canModalClose,
        "before-close": this.handleBeforeClose,
        "fullscreen": this.fullscreen
      },
      "on": {
        ...dialogListeners
      }
    }, [h("template", {
      "slot": "title"
    }, [isVNode(renderTitle) ? h("div", {
      "class": "el-dialog__title"
    }, [renderTitle]) : h("span", {
      "class": "el-dialog__title",
      "domProps": {
        "innerHTML": this.title
      }
    }), h("div", {
      "class": "el-dialog__touch"
    }), this.fullScreenEnable && h("div", {
      "class": "el-dialog__icon",
      "on": {
        "click": () => this.handleFullScreen()
      }
    }, [this.fullscreen ? h("img", {
      "attrs": {
        "src": minscreen
      }
    }) : h("img", {
      "attrs": {
        "src": fullscreen
      }
    })])]), isVNode(renderContent) ? h("div", {
      "class": "candy-dialog__content",
      "directives": [{
        name: "loading",
        value: this.iframeLoading
      }],
      "style": {
        height: this.height
      }
    }, [renderContent]) : h("div", {
      "ref": "content",
      "class": "candy-dialog__content",
      "domProps": {
        "innerHTML": renderContent
      },
      "style": {
        height: this.height
      }
    }), isVNode(this._buttons) && h("div", {
      "slot": "footer",
      "class": "candy-dialog__footer"
    }, [this._buttons]), !isVNode(this._buttons) && this._buttons.length !== 0 && h("div", {
      "slot": "footer",
      "class": "candy-dialog__footer"
    }, [this._buttons.map((item) => {
      return this._renderButton(item);
    })])]);
  },
  methods: {
    _renderButton(btn) {
      const h = this.$createElement;
      const {
        isVNode
      } = this;
      if (isVNode(btn)) {
        return btn;
      }
      if (isFunction_1(btn)) {
        return btn.bind(this, {
          vm: this,
          ctx: this._buttons,
          component: this.renderContent.componentInstance || this.renderContent
        })(this.$createElement);
      }
      const buttonListeners = {
        click: () => this.handleBtnClick(btn)
      };
      const {
        label,
        type,
        ...props
      } = btn;
      return h("el-button", helper([{}, {
        "props": props
      }, {
        "attrs": {
          "type": type,
          "size": "small"
        },
        "on": {
          ...buttonListeners
        }
      }]), [label]);
    },
    handleBtnClick(btn) {
      if (typeof btn.onClick === "function") {
        btn.onClick({
          vm: this,
          ctx: btn,
          component: this.generateComponent(this.renderContent)
        });
      }
    },
    setBtns(cb) {
      setTimeout(() => {
        cb && (this.buttons = cb(this.renderContent.componentInstance));
      });
    },
    generateComponent(vm) {
      if (typeof vm === "string") {
        return this.$refs["content"];
      } else if (typeof vm === "object") {
        return this.renderContent.componentInstance || this.renderContent;
      }
    },
    handleFullScreen() {
      this.fullscreen = !this.fullscreen;
      this.$refs["candy-dialog"].$el.querySelector(".el-dialog").style.transform = "translate(0px, 0px)";
    },
    close() {
      if (isFunction_1(this.beforeClose)) {
        this.beforeClose(this, this.hide);
      } else {
        this.hide();
      }
    },
    hide() {
      this.visible = false;
    },
    destroy() {
      document.body.removeChild(this.$el);
      this.$destroy();
    },
    handleOpen() {
      isFunction_1(this.afterOpen) && this.afterOpen(this);
    },
    handleCancel() {
      isFunction_1(this.afterClose) && this.afterClose(this);
      this.destroy();
    },
    handleBeforeClose(done) {
      if (isFunction_1(this.beforeClose)) {
        this.beforeClose(this, done);
      } else {
        done();
      }
    }
  }
};
var index_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
let __vue2_render, __vue2_staticRenderFns;
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  __vue2_render,
  __vue2_staticRenderFns,
  false,
  __vue2_injectStyles,
  null,
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var Dialog = /* @__PURE__ */ function() {
  return __component__.exports;
}();
let instance;
const service = (options = {}) => {
  const dialogConstructor = Vue.extend(Dialog);
  const { store, asyncContent } = options;
  instance = new dialogConstructor({
    data: options,
    components: {
      "async-content": asyncContent
    },
    store
  });
  const vm = instance.$mount();
  document.body.appendChild(vm.$el);
  vm.visible = true;
  return vm;
};
export { service as default };
//# sourceMappingURL=index.js.map
