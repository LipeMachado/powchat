import styled from 'styled-components'
import { ToogleChatMediaProps } from './index';

export const ChatContainerDiv = styled.div`
    flex: 2;
`;

export const ChatInfoContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px;
`;

export const ChatInfoBoxDiv = styled.div`
    background-color: ${props => props.theme.colors.purple50};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 200px;
    max-width: 100%;
    display: flex;
    box-shadow: 0px 0px 30px rgba(121, 35, 207, 0.3);
`;

export const ChatInfoChatDiv = styled.div<ToogleChatMediaProps>`
    width: 100px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 2;
    border-radius: 14px 14px;
    cursor: pointer;
    transition: all 0.6s ease-in-out;

    ${props => props.toogleChatMedia == true ? `
        color: #ffffff;
    ` : `color: #000000;`}
`;

export const ChatInfoMediaDiv = styled.div<ToogleChatMediaProps>`
    width: 100px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: transparent;
    border-radius: 0 14px 14px 0;
    cursor: pointer;
    transition: all 0.6s ease-in-out;

    ${props => props.toogleChatMedia == true ? `
        color: #000000;
    ` : `color: #ffffff;`}
`;

export const ChatInfoOverlayContainer = styled.div <ToogleChatMediaProps>`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    background-color: ${props => props.theme.colors.purple600};

    ${props => props.toogleChatMedia == true ? `
        transform: translateX(-100%);
    ` : null}
`;