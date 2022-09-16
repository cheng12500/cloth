const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "server": "@/server",
                "view": "@/view",
            }
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    },
})