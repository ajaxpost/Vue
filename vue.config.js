module.exports = {
    devServer:{
        open:true,
        port:3000,
        overlay:false,
        proxy:{
            '/api':{
                target:'https://api.iynn.cn/film/api/v1',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}