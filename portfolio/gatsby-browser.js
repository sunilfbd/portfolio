/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import  { createGlobalStyle, ThemeProvider } from 'styled-components';
const GlobalStyles = createGlobalStyle`
    h1 {
        font-size: 42px;
        color: red;
    }

    h2 {
        font-size: 82px;
        color: green;
    }

    p {
        margin: 10px 0;
        color: red;
    }

`

export const rootElement = ({element}) => (
    <ThemeProvider>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)
