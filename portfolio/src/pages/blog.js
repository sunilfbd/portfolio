import React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"

import BlogListItem from '../StyledElements/BlogListItem'
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
    return (
        <HomePageLayout>
            <div className="port-content-wrapper">
                <h1 className="port-page-title">My Blogs</h1>
                {
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <BlogListItem className="port-blog-item">
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.description}</p>
                                </Link>
                                <div className="blog-item-detail">
                                    <span className="port-blog-item-date">written on: {edge.node.frontmatter.date}</span>
                                    <span className="port-blog-item-author">Author: {edge.node.frontmatter.author}</span>
                                </div>
                            </BlogListItem>
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