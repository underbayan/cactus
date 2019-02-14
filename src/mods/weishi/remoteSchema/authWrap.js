const { setContext } = require('apollo-link-context')
module.exports = link =>
    setContext((request, previousContext) => {
        function getCook(cookiename, cookie = '') {
            const output = {}
            cookie.split(/\s*;\s*/).forEach(function(pair) {
                pair = pair.split(/\s*=\s*/)
                output[pair[0]] = pair.splice(1).join('=')
            })
            return output[cookiename] || ''
        }
        const headers = previousContext.graphqlContext ? previousContext.graphqlContext.headers : {}
        headers.uin = headers.uin || parseInt(getCook('uin', headers.cookie).replace('o', ''), 10)
        headers.skey = headers.skey || getCook('skey', headers.cookie)
        return {
            headers
        }
    }).concat(link)
