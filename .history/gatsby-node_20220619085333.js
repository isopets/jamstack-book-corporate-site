const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
        allContentfulBlog {
            edges {
                node {
                    slug
                }
            }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/single-blog.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}