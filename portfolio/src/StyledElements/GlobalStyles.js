import  { createGlobalStyle } from 'styled-components';

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
        font-size: 18px;
        line-height: 1.5;
    }
`;

export default GlobalStyles
