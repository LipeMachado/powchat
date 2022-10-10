import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
        --purple: #7923cf;
        --blueDark: #16005d;
        --purpleLight200: #f3f1f5;
        --grayLight: #eeeeee;
    
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;