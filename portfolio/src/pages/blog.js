import React from "react"

import BlogList from '../components/BlogList'

import HomePageLayout from '../layouts/HomePageLayout'
import RightAside from '../components/RightAside'

const MyBlogs = () => {
    return (
        <HomePageLayout>
            <BlogList/>
            <RightAside className="port-right-aside">
                ASIDE FROM BLOG PAGE
            </RightAside>
        </HomePageLayout>
    )
}

export default MyBlogs