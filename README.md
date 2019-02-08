# kudoo-graphql
Kudoo's shared library of GraphQL related queries and mutations

Need react and react-dom lib as we are using ract-apollo in this package.

# Development

3 things to consider
`typedefs`: These are definitions of query and mutation
`hoc` : These are mainly useful in react codebase
`services`: using which we can use skelm api in node projects

When we want to use skelm api in any node project, you need to create service for that if it doesn't exist
when we are developing mode, this changes will not be in npm package before publishing so we need to use `npm link` feature

for that
1. you need to go to `kudoo-graphql` folder and run `npm link`
2. go to hermes folder and run `npm link @kudoo/graphql` , which will create linkage to your local folder
3. now whenever you make changes in `kudoo-graphql` , you need to run `npm run build` in `kudoo-graphql` folder , which transpile latest code