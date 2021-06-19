const express = require('express');
const app = express()
const bodyParser = require('body-parser');  // 前端数据解析插件

const defaultPort = 9999

app.use(require('cors')())                // 跨域处理
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}))
app.use(bodyParser.json({limit:'50mb'}))  // 解析前端数据 ,并设置文件上传大小限制

app.use(express.static(__dirname + '/data'))  // 开放静态资源目录

require('./router/index')(app)     // 后端路由
require('./middleware/err')(app)   // 错误处理中间件-路由匹配中间件

app.listen(defaultPort, () => {
  console.log('app is running: http://localhost:' + defaultPort)
})
