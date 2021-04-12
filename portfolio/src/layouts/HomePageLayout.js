import React from 'react'
import  { createGlobalStyle } from 'styled-components';

import '../assets/styles/main.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'

const GlobalStyles = createGlobalStyle`
    h1 {
        font-size: 36px;
        color: #666;
    }

    h2 {
        font-size: 24px;
        color: #222;
    }

    p {
        margin: 10px 0;
        color: #333;
        font-size: 14px;
        line-height: 1.5;
    }
`;



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