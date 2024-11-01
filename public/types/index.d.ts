import { ElButton } from 'element-ui/types/button'

type Fn = (vm) => void
type BtnFnConfig = (opt: { vm: vm; ctx: BtnConfig; component: any }) => void
type getFooterBtnsFn = (opt: { vm: vm; getFooterBtns: (component: any) => object | Array<BtnConfig | BtnFnConfig> }) => void

interface BtnConfig extends Partial<ElButton> {
  label: string
  onClick?: BtnFnConfig
  render?: any
}

interface DialogConfig {
  /** 标题 */
  title?: string | Fn | object
  content?: string | Fn | object
  buttons?: getFooterBtnsFn | object | Array<BtnConfig | BtnFnConfig>

  width?: string
  height?: string
  /** 高度 */
  top?: string
  zIndex?: number
  class?: string
  iframeSrc?: string

  showClose?: boolean
  modal?: boolean
  canModalClose?: boolean
  fullscreen?: boolean
  fullScreenEnable?: boolean
  center?: boolean

  beforeClose?: () => void
  afterOpen?: () => void
  afterClose?: () => void

  store?: any

  asyncContent?: any
  asyncProps?: any
  asyncAttrs?: any
}

interface vm extends DialogConfig {
  hide: () => void
  close: () => void
}

declare const service: (options?: DialogConfig) => any
export default service
