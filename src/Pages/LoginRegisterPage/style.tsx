import styled from 'styled-components';
import { LoginRegisterProps } from './index';

export const LoginRegisterPageContainer = styled.div`
    background: ${props => props.theme.colors.signInUpPage_Background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
`;

export const SignUpSignInContainer = styled.div`
    background-color: ${props => props.theme.colors.signInUpPage_BackgroundCard};
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 678px;
    max-width: 100%;
    min-height: 400px;

    @media only screen and (max-width: 700px){
        width: 678px;
        max-width: 90%;
        min-height: 500px;
    }
`;

export const SignUpContainer = styled.div<LoginRegisterProps>`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    color: ${props => props.theme.colors.signInUpPage_TextFrom};

    @media only screen and (max-width: 700px){
        width: 100%;
        height: 50%;
        top: 60%;
        left: 0;
        transform: translateY(-120%);

        h1 {
            margin-bottom: 5px;
            font-size: 20px;
        }

        input {
            padding: 10px 15px;
            margin: 5px 0;
        }
        
        button {
            margin-top: 5px;
        }
    }
    
    ${props => props.signinIn !== true ? `
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;

        @media only screen and (max-width: 700px){
            transform: translateY(-20%);

            h1 {
                margin-bottom: 5px;
                font-size: 20px;
            }

            input {
                padding: 10px 15px;
                margin: 5px 0;
            }

            button {
                margin-top: 5px;
            }
        }
    ` : null}
`;

export const SignInContainer = styled.div<LoginRegisterProps>`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    color: ${props => props.theme.colors.signInUpPage_TextFrom};

    @media only screen and (max-width: 700px){
        width: 100%;
        height: 50%;

        h1 {
            margin-bottom: 5px;
        }

        button {
            margin-top: 0;
        }
    }

    ${props => (props.signinIn !== true ? `
        transform: translateX(100%);

        @media only screen and (max-width: 700px){
            transform: translateY(100%);
            z-index: 0;
        }
    ` : null)}
`;

export const Form = styled.div`
    background-color: ${props => props.theme.colors.signInUpPage_BackgroundCard};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;

    a {
        text-decoration: none;
        margin-top: 20px;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 0;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    background-color: ${props => props.theme.colors.signInUpPage_BackgroundInput};
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    color: ${props => props.theme.colors.signInUpPage_TextInput};
`;

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid ${props => props.theme.colors.purple600};
    background-color: ${props => props.theme.colors.purple600};
    color: ${props => props.theme.colors.white};
    font-size: 12px;
    margin-top: 20px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
    
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`;
export const GhostButton = styled(Button)`
    background-color: transparent;
    border-color: ${props => props.theme.colors.white};
`;

export const OverlayContainer = styled.div<LoginRegisterProps>`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    @media only screen and (max-width: 700px){
        left: 0;
        top: 50%;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    ${props => props.signinIn !== true ? `
        transform: translateX(-100%);

        @media only screen and (max-width: 700px){
            transform: translateY(-100%);
            left: 0;
            top: 50%;
            bottom: 0;
            width: 100%;
            height: 50%;
        }
    ` : null}
`;

export const Overlay = styled.div<LoginRegisterProps>`
    background: ${props => props.theme.colors.purple600};
    background: linear-gradient(to right, ${props => props.theme.colors.blue700}, ${props => props.theme.colors.purple600});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: ${props => props.theme.colors.white};
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    @media only screen and (max-width: 700px){
        left: 0;
        bottom: 0;
        width: 100%;
        transform: translateY(0);
        height: 100%;
    }

    ${props => (props.signinIn !== true ? `
        transform: translateX(50%);

        @media only screen and (max-width: 700px){
            transform: translateY(0%);
            height: 100%;
        }
    ` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    @media only screen and (max-width: 700px){
        width: 100%;
    }
`;

export const LeftOverlayPanel = styled(OverlayPanel) <LoginRegisterProps>`
   transform: translateX(-20%);

   @media only screen and (max-width: 700px){
        top: -100%;
        right: 0;
        transform: translateY(-107%);
    }

   ${props => props.signinIn !== true ? `
        transform: translateX(0%);

        @media only screen and (max-width: 700px){
            transform: translateY(0%);
            top: 0;
            height: 100%;
        }
   ` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel) <LoginRegisterProps>`
    right: 0;
    transform: translateX(0);
    
    @media only screen and (max-width: 700px){
        transform: translateY(0%);
        height: 50%;
    }

    ${props => props.signinIn !== true ? `
        transform: translateX(20%);

        @media only screen and (max-width: 700px){
            transform: translateY(107%);
            height: 100%;
            bottom: 0;
        }
    ` : null}
`;

export const Paragraph = styled.p`
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 5px 0 5px;
`;