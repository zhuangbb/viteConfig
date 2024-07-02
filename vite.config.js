import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
import ViteAliases from './plugins/ViteAliases'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    // alias:{
    //   "@":path.resolve(__dirname,'./src'),
    //   "@assets":path.resolve(__dirname,'./src/assets')
    // }
  },
  envPrefix:'ENV',
  css:{
    postcss:{
      plugins:[
        postcssPresetEnv(/* pluginOptions */)
      ]
    }
  },
  // build
  build:{
    rollupOptions:{
      output:{//hash:对文件名和文件内容进行组合计算的结果
        assetFileNames:'[name].[hash:5].[ext]'
      },
    },
    assetsInlineLimit:10*1024, // 小于这个数值的图片会打包成base64
    outDir:'dist',
    // assetsDir:'static'
  },
  plugins:[
    vue(),
    ViteAliases({
      keyName:'@'
    })
  ]
})
