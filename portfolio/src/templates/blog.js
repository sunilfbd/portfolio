import React from 'react'
import { graphql } from 'gatsby'

import Title  from '../StyledElements/Title'
import LeftContent from '../StyledElements/LeftContent'

import HomePageLayout from '../layouts/HomePageLayout'
import RightAside from '../components/RightAside'

export const query = graphql`
query ($slug: String!){
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
                <Title>{props.data.markdownRemark.frontmatter.title}</Title>
                <span>{props.data.markdownRemark.frontmatter.author}</span>
                <LeftContent dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></LeftContent>
            </div>
            <RightAside className="port-right-aside">
                ASIDE FROM BLOG PAGE
            </RightAside>
        </HomePageLayout>
    )
}

export default BlogDetail