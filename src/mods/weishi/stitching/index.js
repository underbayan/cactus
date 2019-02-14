const { mergeSchemas } = require('graphql-tools')

module.exports = {
    stitching: async function(schema) {
        const aux = await schema
        return mergeSchemas({
            schemas: [
                aux,
                `
                extend type User {
                roles:[Role]
                }
        `
            ],
            resolvers: {
                User: {
                    roles: {
                        fragment: `... on User { roleIds }`,
                        resolve(user, args, context, info) {
                            return info.mergeInfo.delegateToSchema({
                                schema: aux,
                                operation: 'query',
                                fieldName: 'roles',
                                args: {
                                    roleIds: user.roleIds
                                },
                                context,
                                info
                            })
                        }
                    }
                }
            }
        })
    }
}
