const { HttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')
const { setContext } = require('apollo-link-context')
const { URL } = require('url')
const proxyFetch =
    process.env.NODE_ENV === 'development'
        ? (url, opts) =>
              fetch(
                  url,
                  Object.assign(opts, {
                      agent: new require('proxy-agent')('http://127.0.0.1:8888')
                  })
              )
        : fetch
const { introspectSchema, makeRemoteExecutableSchema, mergeSchemas } = require('graphql-tools')
const changeUrlByL5 = require('../lib/changeUrlByL5')
const authWrap = require('./authWrap')
module.exports = {
    getSchema: async () => {
        const dataSource = [
       'xxxx'
        ]
        const links = dataSource.map(o => {
            const url = new URL(o)
            const newUrl = changeUrlByL5(url.host)
            const newPath = 'http://' + newUrl + url.pathname
            console.log('DataSource: ', newPath)
            return authWrap(new HttpLink({ uri: newPath, fetch: proxyFetch }))
        })
        const schemas = await Promise.all(
            links.map(async o => ({
                schema: await introspectSchema(o),
                link: o
            }))
        )
        const executableSchema = schemas.map(o => makeRemoteExecutableSchema(o))
        return mergeSchemas({
            schemas: executableSchema
        })
    }
}
