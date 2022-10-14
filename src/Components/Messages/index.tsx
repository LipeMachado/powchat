import React from 'react'
import { Message } from '../Message'
import {
    MessagesContainerDiv
} from './style'

export function Messages() {
    return (
        <>
            <MessagesContainerDiv>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </MessagesContainerDiv>
        </>
    )
}
