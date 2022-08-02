/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')
// // webpack.config.js
const Components = require('unplugin-vue-components/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')

module.exports = {
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // },
  outputDir: './build',
  // 打包后文件路径以./开头
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    },
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
      // require('unplugin-auto-import/webpack')({})
    ]
  }
}
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// const path = require('path')

// module.exports = {
//   outputDir: './build',
//   configureWebpack: {
//     plugins: [
//       AutoImport({
//         resolvers: [ElementPlusResolver()]
//       }),
//       Components({
//         resolvers: [ElementPlusResolver()]
//       })
//     ]
//   },
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'http://152.136.185.210:5000',
//         pathRewrite: {
//           '^api': ''
//         }
//       }
//     }
//   },
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('@', path.resolve(__dirname, 'src'))
//       .set('views', '@/views')
//   }
// }
