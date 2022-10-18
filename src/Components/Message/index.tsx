import React from 'react'
import {
    MessageContainerDiv,
    MessageInfoDiv,
    MessageContentDiv
} from './style'

import ImageExample from '../../Assets/ImageExample.jpg'

export function Message() {
    return (
        <>
            <MessageContainerDiv className="owner">
                <MessageInfoDiv>
                    <img
                        src={ImageExample}
                        alt=""
                    />
                    <span>Just Now</span>
                </MessageInfoDiv>
                <MessageContentDiv className="messageContent">
                    <p>Hello</p>
                    <img
                        src={ImageExample}
                        alt=""
                    />
                </MessageContentDiv>
            </MessageContainerDiv>
            <MessageContainerDiv className="">
                <MessageInfoDiv>
                    <img
                        src={ImageExample}
                        alt=""
                    />
                    <span>Just Now</span>
                </MessageInfoDiv>
                <MessageContentDiv className="messageContent">
                    <p>Hello</p>
                    <img
                        src={ImageExample}
                        alt=""
                    />
                </MessageContentDiv>
            </MessageContainerDiv>
        </>
    )
}
