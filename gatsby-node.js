const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path");

exports.createPages=({graphql,actions})=> {
const {createPage} = actions;
  return graphql(`{
  wpcontent{
    arts{
      edges{
        node{
          slug
          id
        }
      }
    }
  }
}`).then(result=>{
  if(result.errors){
    result.errors.forEach(e=>console.error(e.toString()))

    return Promise.reject(result.errors);
  }

  const arts = result.data.wpcontent.arts.edges;
  arts.forEach(arts => {
    const {id , slug}= arts.node

    //voor elke object een pagina maken met een route erbij
    //componnent een template voor het maken voor elke arts
    //cctx data geven in
createPage({
  path : slug,
  component: path.resolve(`src/templates/templateStyles/arts.js`),
  context: {
    id,
    slug

  }
})
  })
 
})
  
};



/* Aan de hand van dit stukje code worden de images vanuit WPgraphql omgezet tot images waarop Gatsby image optimization kan toepassen */
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphql_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
