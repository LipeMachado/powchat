import React from 'react'
import {
    InputMessageContainerDiv,
    InputMessageInput,
    InputMessageButtonDiv,
    InputMessageSendButton
} from './style'

export function InputMessage() {
    return (
        <>
            <InputMessageContainerDiv>
                <InputMessageInput />
                <InputMessageButtonDiv>
                    <InputMessageSendButton>Send</InputMessageSendButton>
                </InputMessageButtonDiv>
            </InputMessageContainerDiv>
        </>
    )
}
