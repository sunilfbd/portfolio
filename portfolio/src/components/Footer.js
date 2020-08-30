import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import '../assets/styles/components/footer.scss'

export default function Footer() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                        description
                    title
                }
            }
        }`
    )

    return (
        <footer className="port-footer">
            <p>&copy; all copyright reserved with {data.site.siteMetadata.author}</p>
        </footer>
    )
}
