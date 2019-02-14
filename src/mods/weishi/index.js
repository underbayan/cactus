const { getSchema } = require('./remoteSchema')
const { transform } = require('./transform')
const { stitching } = require('./stitching')
module.exports = { schema: transform(stitching(getSchema())) }
