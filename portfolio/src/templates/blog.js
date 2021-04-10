import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components';
import { h1 } from '../StyledElements/Title'


import HomePageLayout from '../layouts/HomePageLayout'
import RightAside from '../components/RightAside'

export const query = graphql`
query (
    $slug: String!
    ){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        author
        title
        date
      }
      html
    }
  }
`


const BlogDetail = (props) => {
    return (
        <HomePageLayout>
            <div>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <span>{props.data.markdownRemark.frontmatter.author}</span>
                <span>{props.data.markdownRemark.frontmatter.title}</span>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
            <RightAside className="port-right-aside">
                ASIDE FROM BLOG PAGE
            </RightAside>
        </HomePageLayout>
    )
}

export default BlogDetail