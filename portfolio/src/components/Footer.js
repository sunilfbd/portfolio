import React from 'react'
// import { graphql, useStaticQuery } from "gatsby"
import {CopyRightWrapper, FooterWrapper} from '../StyledElements/Footer'

export default function Footer() {

    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 author
    //                     description
    //                 title
    //             }
    //         }
    //     }`
    // )

    return (
        <FooterWrapper className="port-footer">
            <CopyRightWrapper>&copy; all copyright reserved</CopyRightWrapper>
        </FooterWrapper>
    )
}
