const path = require('path')
const fg = require('fast-glob')
const { mergeSchemas } = require('graphql-tools')
/**
 * 合并所有的模块下的异步 schema， 注意这里使用glob 自动引入文件夹的index文件
 */
const mergeMods = async function() {
    const MODS_PATH = path.resolve(__dirname)
    const files = fg.sync(['*/index.js'], { cwd: MODS_PATH })
    const schemas = await Promise.all(
        files.map(async item => {
            const { schema } = require(path.resolve(MODS_PATH, item))
            const auxResult = await schema
            return auxResult
        })
    )
    const schema = mergeSchemas({ schemas })
    return schema
}
module.exports = { schema: mergeMods() }
