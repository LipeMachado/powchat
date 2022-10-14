import React from 'react';
import {
    BackgroundContainerDiv
} from './style';
import { Link } from 'react-router-dom'
import { SideBar } from '../../Components/SideBar';
import { Chat } from '../../Components/Chat';

const HomePage: React.FC = () => {
    return (
        <>
            <BackgroundContainerDiv>
                <SideBar />
                <Chat />
            </BackgroundContainerDiv>
        </>
    );
}

export default HomePage;