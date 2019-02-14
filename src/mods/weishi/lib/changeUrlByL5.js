module.exports = function changeUrlByL5(address) {
    const l5api = require('../config/l5api')
    if (process.platform !== 'win32' && process.env.NODE_ENV !== 'development') {
        if (l5api[address]) {
            if (l5api[address].modid === -1) return l5api[address].devUrl
            const l5Tool = plug('api/L5/L5.api.js')
            const l5Info = l5Tool.ApiGetRouteSync(l5api[address])
            return !l5Info.ret ? l5Info.ip + ':' + l5Info.port : l5api[address].devUrl || address
        }
    } else {
        if (l5api[address]) {
            if (l5api[address]) {
                return l5api[address].devUrl
            }
        }
    }
    return address
}
