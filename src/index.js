const { ApolloServer, gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { generateQuery } = require('@tencent/lily')
const cors = require('cors')
const app = express()
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
app.use(
    cors({
        origin: /[\s\S]*\.weishi\.qq\.com$/,
        optionsSuccessStatus: 200,
        credentials: true
    })
)
const AsyncAux = async () => {
    const { schema } = require('./mods')
    const auxResult = await schema
    const server = new ApolloServer({
        schema: auxResult,
        playground: process.env.NODE_ENV === 'development',
        introspection: process.env.NODE_ENV === 'development',
        context: ({ req }) => req
    })
    server.applyMiddleware({
        app,
        cors: {
            origin: /[\s\S]*\.xxxx\.xxx\.com$/,
            optionsSuccessStatus: 200,
            credentials: true
        }
    })
    app.use('/oa', require('cactus/src/tencent_helper/oa'))
    app.get('/introspection/:queryType/:name', (req, res) => {
        const result = generateQuery(auxResult, req.params.name, req.params.queryType)
        res.setHeader('Content-Type', 'application/json')
        res.send({ ret: 0, data: result })
    })
}
AsyncAux()
module.exports = app
