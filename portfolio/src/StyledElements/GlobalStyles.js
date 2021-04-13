import  { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #fffef2;
        font-size: 75%;
        font-family: 'Trebuchet MS', Arial, sans-serif;
    }

    .container{
        width: 1180px;
        margin: 10px auto;
        padding: 20px;
    }

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
