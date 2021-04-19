import styled from 'styled-components';

export const HomePageHeroWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
`;

export const PortfolioPicture = styled.picture`
    width: 35%;
`;

export const PortfolioImg = styled.img`
    width: 100%;
`;

export const HeroCopyTexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    p {
        font-size: 26px;
        font-style: italic;
    }
`;