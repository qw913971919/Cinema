module.exports= {//不要用export default
    devServer : {
        proxy : {
            '/api':{
                target:'http://39.97.33.178',//通过反向代理解决跨域问题 目标网址
                changeOrigin:true//反向代理时是否改变我们得地址，必须是true
            }
        }
    }
}