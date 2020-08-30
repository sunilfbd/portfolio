import React from "react"

import HomePageLayout from '../layouts/HomePageLayout'
import RightAside from '../components/RightAside'

const MyRepos = () => {
  return (
    <HomePageLayout>
        <h1>My Repositories</h1>
        <p>List of Repositories goes here</p>

        <RightAside>
            ASIDE FROM REPOSITORY PAGE
        </RightAside>
        
    </HomePageLayout>
  )
}

export default MyRepos