import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }   

    html {
        font-size: 62.5%;
    }

    body {
        font-family: sans-serif;
        line-height: 1;
        font-weight: 400;
        color: #555;
    }
`;

export default GlobalStyles;
