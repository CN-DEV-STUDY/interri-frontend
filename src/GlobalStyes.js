import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #1D2133;
    }   

    html {
        font-size: 62.5%;
    }

    body {
        font-family: sans-serif;
        line-height: 1;
        min-width: 144rem;
    }
    /* Add this CSS to your application */
    .ReactQueryDevtools {
        code {
            color: white !important;
        }
        
        button {
            color: white !important;   
        }

        button > * {
            color: white !important;
        }
    }
`;

export default GlobalStyles;
