## 基本命令

yarn install
yarn run dev

## vscode launchJson 配置：

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch TSW IN DEBUG MODE",
            "console": "integratedTerminal",
            "program": "TSW_PATH\\index.js",
            "args": ["config=./dev-config/tsw.config.js"]
        }
    ]
}
```

## 参考资料

-   graphql 一种查询语言：https://graphql.org/learn/
-   apollo : https://www.apollographql.com/
    -   远程拉取 schema: https://www.apollographql.com/docs/graphql-tools/remote-schemas.html
    -   转换 schema： https://www.apollographql.com/docs/graphql-tools/schema-transforms.html
    -   代理： https://www.apollographql.com/docs/graphql-tools/schema-delegation.html
    -   合并和级联查询： https://www.apollographql.com/docs/graphql-tools/schema-stitching.html#mergeSchemas
    -   解决 N+1 问题：https://github.com/facebook/dataloader

## 说明

-   项目中使用 tnpm lily 的包，会根据 schema 来自动生成查询语言。 获取地址是'/introspection/:queryType/:name'
-   项目基于 tsw 和 express 做为 server
-   后端数据的认证： 在 header 头中带入 skey 和 uin
-   本地开发环境为 127.0.0.1:8081
-   已经对接 orangeci push-master 即可发布
