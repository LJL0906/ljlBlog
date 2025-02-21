import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    // 是否监听所有地址
    host: true,
    // 端口号
    port: 3333,
    // 端口被占用时，是否直接退出
    strictPort: false,
    // 是否自动打开浏览器
    open: true,
    // 反向代理
    proxy: {

    },
    // 是否允许跨域
    cors: true,
    // 预热常用文件，提高初始页面加载速度
    warmup: {
      clientFiles: [
        "./src/layouts/**/*.*",
        "./src/pinia/**/*.*",
        "./src/router/**/*.*"
      ]
    }
  },
  // 构建配置
  build: {
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        /**
         * @name 分块策略
         * @description 1. 注意这些包名必须存在，否则打包会报错
         * @description 2. 如果你不想自定义 chunk 分割策略，可以直接移除这段配置
         */
        manualChunks: {
          vue: ["vue", "vue-router", "pinia"],
        }
      }
    },
    // 是否开启 gzip 压缩大小报告，禁用时能略微提高构建性能
    reportCompressedSize: false,
    // 单个 chunk 文件的大小超过 2048kB 时发出警告
    chunkSizeWarningLimit: 2048
  },
  // 混淆器
  esbuild:
    mode === "development"
      ? undefined
      : {
        // 打包构建时移除 console.log
        pure: ["console.log"],
        // 打包构建时移除 debugger
        drop: ["debugger"],
        // 打包构建时移除所有注释
        legalComments: "none"
      },
}))
