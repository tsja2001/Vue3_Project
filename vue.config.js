/* eslint-disable @typescript-eslint/no-var-requires */
const Components = require('unplugin-vue-components/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')

module.exports = {
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
  },
  // 配置跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
