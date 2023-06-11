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
    
    /* React Query Devtools 커스텀 스타일 */
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

    /* SwiperJs */
    :root {
        /* 화살표 사이즈 */
        --swiper-navigation-size: 30px;
        /* 화살표 색상 */
        --swiper-navigation-color: #fff;
    }
`;

export default GlobalStyles;
