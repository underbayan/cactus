const app = require('../src')
// 路由：起个名字
this.name = function(req) {
    const pathname = req.REQUEST.pathname
    const arr = pathname.split('/', 2)
    return arr[1]
}

// 路由：返回一个模块
this.find = function(name, req, res) {
    context.autoParseBody = false
    if (~req.REQUEST.hostname.indexOf('xxxx.xxxx.xxxx.com')) return app
}
