import { defineConfig } from 'vite'

import { createVuePlugin } from 'vite-plugin-vue2'
// import styleImport from 'vite-plugin-style-import'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import pkg from './package.json'

const depNames = Object.keys(pkg.dependencies)
depNames.push('vue')
depNames.push('element-ui')
const depNamesReg = new RegExp(`^(${depNames.join('|')})`)

export default ({ mode }) => {
  const isDemo = mode === 'demo'

  return defineConfig({
    base: './',
    plugins: [
      createVuePlugin({ jsx: true }),
      cssInjectedByJsPlugin(),
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'element-ui',
      //       // styleLibraryName: 'theme-chalk',
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `theme-chalk/${name}.css`
      //       }
      //     }
      //   ],
      // })
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': '/src',
        'dialog-service': '/src/index.js',
      },
    },
    build: {
      sourcemap: !isDemo,
      outDir: isDemo ? 'demo' : 'lib',
      emptyOutDir: !isDemo,
      rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: (id) => {
          return !isDemo && depNamesReg.test(id)
        },
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
      // 常规打包
      lib: {
        entry: isDemo ? './index.html' : './src/index.js',
        name: 'dialogService',
        fileName: (format) => {
          if (format === 'umd') {
            return 'index.umd.js'
          } else {
            return 'index.js'
          }
        },
        formats: isDemo ? ['umd'] : ['es'],
      },
    },
  })
}
