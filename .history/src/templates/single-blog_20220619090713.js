import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"

const SingleBlog = props => {
  return (
    <Layout>
      <div className={style.hero}>
        <GatsbyImage
          image={
            props.data.markdownRemark.contentfulBlog.childImageSharp
              .gatsbyImageData
          }
          alt="blog-image"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.data.contentfulBlog.title}</h1>
          <p>{props.data.contentfulBlog.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default SingleBlog

export const query = graphql`
  query ContentfulSingleBlogQuery ($slug: String!) {
    contentfulBlog {
      title
      date(formatString: "YYYY-MM-DD")
      textBody {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(
          formats: AUTO
          quality: 90
          placeholder: BLURRED
          width: 1000
        )
      }
    }
  }
`
