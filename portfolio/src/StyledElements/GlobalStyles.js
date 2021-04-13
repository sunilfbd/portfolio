import  { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #fffef2;
        font-size: 75%;
        font-family: Georgia, 'Trebuchet MS', sans-serif,  Arial;
        color: #666666;
    }

    .container{
        width: 1180px;
        margin: 10px auto;
        padding: 20px;
    }

    h1 {
        font-size: 36px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        margin: 10px 0;
        font-size: 18px;
        line-height: 1.5;
    }

    footer {
        margin-top: 30px;
        padding-top: 5px;
        border-top: 1px solid #ddd;
    }
`;

export default GlobalStyles
