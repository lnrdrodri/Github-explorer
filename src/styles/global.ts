import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        height: auto;
    }

    body {
        background:  url(${githubBackground}) no-repeat 70% top, linear-gradient(to bottom, #F0F0F5, #CCC);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px 'Roboto', sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;