import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"

const SingleBlog = (props) => {
    return(
        <Layout>
            {/* <div className={style.hero}>
                <GatsbyImage image={props.data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData} alt="blog-image" />
            </div>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                </div>
            </div> */}
        </Layout>
    )
}

export default SingleBlog

