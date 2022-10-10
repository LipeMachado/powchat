import React, { useState } from 'react';
import {
    LoginRegisterPageContainer,
    SignUpSignInContainer,
    SignUpContainer,
    SignInContainer,
    Form,
    Title,
    Input,
    Button,
    OverlayContainer,
    Overlay,
    LeftOverlayPanel,
    Paragraph,
    GhostButton,
    RightOverlayPanel
} from './style';
import { Link } from 'react-router-dom';

export interface LoginRegisterProps {
    signinIn: boolean;
}

const LoginRegisterPage: React.FC = () => {
    const [signIn, setSignIn] = useState(true);

    return (
        <LoginRegisterPageContainer>
            <SignUpSignInContainer>
                <SignUpContainer signinIn={signIn}>
                    <Form>
                        <Title>Create Account</Title>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Button onClick={() => setSignIn(true)}>Sign up</Button>
                    </Form>
                </SignUpContainer>

                <SignInContainer signinIn={signIn}>
                    <Form>
                        <Title>Sign In</Title>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Link to="/home"><Button>Sign in</Button></Link>
                    </Form>
                </SignInContainer>

                <OverlayContainer signinIn={signIn}>
                    <Overlay signinIn={signIn}>
                        <LeftOverlayPanel signinIn={signIn}>
                            <Title>Welcome Back!</Title>
                            <Paragraph>
                                To keep connected with us please login with your personal info
                            </Paragraph>
                            <GhostButton onClick={() => setSignIn(true)}>
                                Sign In
                            </GhostButton>
                        </LeftOverlayPanel>

                        <RightOverlayPanel signinIn={signIn}>
                            <Title>Hello, Friend!</Title>
                            <Paragraph>
                                Enter Your personal details and start journey with us
                            </Paragraph>
                            <GhostButton onClick={() => setSignIn(false)}>
                                Sign Up
                            </GhostButton>
                        </RightOverlayPanel>
                    </Overlay>
                </OverlayContainer>
            </SignUpSignInContainer>
        </LoginRegisterPageContainer>
    );
}

export default LoginRegisterPage;