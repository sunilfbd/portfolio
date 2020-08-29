import React from "react"

import HomePageLayout from '../layouts/HomePageLayout'
import LeftAside from '../components/LeftAside'
import RightAside from '../components/RightAside'

const MyBlogs = () => {
    return (
        <HomePageLayout>  
            <LeftAside/>
            <h1>My Blogs</h1>
            <p>List of MyBlogs goes here</p>
            <RightAside/>
        </HomePageLayout >
    )
}

export default MyBlogs