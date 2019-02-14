// http监听地址
this.httpAddress = '0.0.0.0'

// http监听地址
this.httpPort = 3000

this.workerUid = 'root'

// 路由
this.router = require('./router.js')

// logger
this.logger = {
    logLevel: 'debug'
}

this.ajaxDefaultOptions = {
    autoToken: false,
    autoQzoneToken: false,
    retry: 0,
    useJsonParseOnly: true
}

this.timeout = {
    socket: 600000,
    post: 600000,
    get: 10000,
    keepAlive: 10000,
    dns: 2000
}

this.tswL5api = {}
