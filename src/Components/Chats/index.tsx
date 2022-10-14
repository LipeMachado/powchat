import React from 'react'
import {
    ChatsCardBoxDiv,
    ChatsImageProfileDiv,
    ChatsNamePreviewMessageDiv,
    ChatsVisualizationDiv
} from './style'

import ImageExample from '../../Assets/ImageExample.jpg';

export function Chats() {
    return (
        <>
            <ChatsCardBoxDiv>
                <ChatsImageProfileDiv>
                    <div />
                    <img src={ImageExample} />
                </ChatsImageProfileDiv>
                <ChatsNamePreviewMessageDiv>
                    <span>Lipe Machado</span>
                    <p>Hello Lipe</p>
                </ChatsNamePreviewMessageDiv>
                <ChatsVisualizationDiv>
                    <span />
                    <span />
                </ChatsVisualizationDiv>
            </ChatsCardBoxDiv>
        </>
    )
}
