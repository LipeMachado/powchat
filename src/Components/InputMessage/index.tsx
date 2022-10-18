import { DotsThreeVertical, TelegramLogo } from 'phosphor-react'
import React from 'react'
import {
    InputMessageContainerDiv,
    InputMessageOptions,
    InputMessageBoxInputDiv,
    InputMessageInput,
    InputMessageSendButton
} from './style'

export function InputMessage() {
    return (
        <>
            <InputMessageContainerDiv>
                <InputMessageOptions>
                    <DotsThreeVertical size={25} />
                </InputMessageOptions>
                <InputMessageBoxInputDiv>
                    <InputMessageInput placeholder="Type a new message..." />
                    <InputMessageSendButton>
                        Send
                        <TelegramLogo size={18} />
                    </InputMessageSendButton>
                </InputMessageBoxInputDiv>
            </InputMessageContainerDiv>
        </>
    )
}
