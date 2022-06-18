import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"

const Blog = props => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1> Blog </h1> <p> 弊社サービスやお客様の声などを紹介します。 </p>{" "}
          {props.data.allMarkdownRemark.edges.map((singleBlog, index) => (
            <div className={style.blogCard} key={index}>
              <div className={style.textContainer}>
                <h3> {singleBlog.node.frontmatter.title} </h3>{" "}
                <p> {singleBlog.node.frontmatter.excerpt} </p>{" "}
                <p> {singleBlog.node.frontmatter.date} </p>{" "}
                <Link to={singleBlog.node.fields.slug}> Read More </Link>{" "}
              </div>{" "}
              <GatsbyImage
                image={
                  singleBlog.node.frontmatter.image.childImageSharp
                    .gatsbyImageData
                }
                alt="card-image"
                className={style.cardImg}
              />{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ContentfulBlogQuery {
    allContentfulBlog {
      edges {
        node {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          excerpt
          id
          image {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90)
          }
        }
      }
    }
  }
`
