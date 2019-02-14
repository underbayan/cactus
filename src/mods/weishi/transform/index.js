const {
    transformSchema,
    AddArgumentsAsVariables,
    ReplaceFieldWithFragment,
    AddTypenameToAbstract,
    FilterTypes,
    RenameTypes,
    FilterToSchema,
    TransformRootFields,
    RenameRootFields,
    FilterRootFields,
    ExtractField,
    WrapQuery
} = require('graphql-tools')

exports.transform = async function(schema) {
    const aux = await schema
    return transformSchema(aux, [
        new RenameTypes(name => {
            return '_'+name
        })
    ])
}
