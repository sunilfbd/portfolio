import React from 'react'

import '../assets/styles/main.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStyles from '../StyledElements/GlobalStyles';


 const HomePageLayout = (props) => {
    return (
        <main className="container">
            <GlobalStyles/>
            <Header/>
            {props.children}
            <Footer />
        </main>
    )
}

export default HomePageLayout