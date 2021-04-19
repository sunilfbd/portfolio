import React from "react"

import HomePageLayout from '../layouts/HomePageLayout'
// import RightAside from '../components/RightAside'
import HomePageHero from '../components/HomePageHero'
import BlogList from '../components/BlogList'

const IndexPage = () => {
  return (
    <HomePageLayout>
      <HomePageHero />
      <BlogList/>
      {/* <h1>Welcome to my portfolio</h1>
      <p>I'll tell you about myself in short while..</p>
      <RightAside>
        right asideeeer
      </RightAside> */}
    </HomePageLayout>
  )
}

export default IndexPage
