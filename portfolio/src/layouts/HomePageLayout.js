import React from 'react'

import '../assets/styles/main.scss';

import Header from '../components/Header'
import Footer from '../components/Footer'

 const HomePageLayout = (props) => {
    return (
        <main className="container">
            <Header/>
            {props.children}
            <Footer />
        </main>
    )
}

export default HomePageLayout