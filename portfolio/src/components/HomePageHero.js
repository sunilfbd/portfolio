import React from 'react';
import {HeroCopyTexWrapper, HomePageHeroWrapper, PortfolioPicture, PortfolioImg } from '../StyledElements/HomePageHero';
import * as staticData from '../assets/contentFiles/copyText.json';
import portfolio from '../assets/images/portfolio.jpg';


const HomePageHero = () => {
    return (
        <HomePageHeroWrapper>
            <PortfolioPicture>
                <PortfolioImg src={portfolio} alt={staticData.portfolioImgText} />
            </PortfolioPicture>
            <HeroCopyTexWrapper dangerouslySetInnerHTML={{ __html: staticData.heroText}} />
        </HomePageHeroWrapper>
    )
}

export default HomePageHero;
