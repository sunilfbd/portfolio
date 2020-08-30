import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import HomePageLayout from '../layouts/HomePageLayout'
import RightAside from '../components/RightAside'

const MyBlogs = () => {

const data = useStaticQuery(graphql`
{
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    date
                    description
                    title
                    author
                }
                html
                excerpt
                fields {
                    slug
                }
            }
        }
    }
}`
)


    console.log(data);
    return (
        <HomePageLayout>
            <div className="port-content-wrapper">
                <h1 className="port-page-title">My Blogs</h1>
                {
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <section className="port-blog-item">
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.description}</p>
                                <div className="blog-item-detail">
                                    <span className="port-blog-item-date">written on: {edge.node.frontmatter.date}</span>
                                    <span className="port-blog-item-author">Author: {edge.node.frontmatter.author}</span>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
            <RightAside className="port-right-aside">
                ASIDE FROM BLOG PAGE
            </RightAside>

        </HomePageLayout>
    )
}

export default MyBlogs