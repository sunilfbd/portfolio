import React from "react"

import HomePageLayout from '../layouts/HomePageLayout'
import LeftAside from '../components/LeftAside'
import RightAside from '../components/RightAside'

const MyBlogs = () => {
    return (
        <HomePageLayout>  

            <LeftAside>
                LEFT ASIDE FROM BLOG PAGE
            </LeftAside>

            <h1>My Blogs</h1>
            <p>List of MyBlogs goes here</p>

            <RightAside>
                ASIDE FROM BLOG PAGE
            </RightAside>

        </HomePageLayout>
    )
}

export default MyBlogs