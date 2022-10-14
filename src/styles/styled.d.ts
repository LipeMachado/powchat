import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            //Colors
            black: string;
            white: string;

            purple50: string;
            purple600: string;

            gray100: string;
            gray500: string;

            blue700: string;

            //Login & Register - Page
            signInUpPage_Background: string,
            signInUpPage_BackgroundCard: string,
            signInUpPage_TextFrom: string,
            signInUpPage_BackgroundInput: string,
            signInUpPage_TextInput: string,

            //Home - Page
            homePage_Background: string,

            //SideBar - Component
            sideBar_Background: string,
            sideBar_BorderImages: string,
        },
    }
}