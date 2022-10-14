import React, { useState } from 'react'
import {
    ChatContainerDiv,
    ChatInfoContainerDiv,
    ChatInfoBoxDiv,
    ChatInfoChatDiv,
    ChatInfoMediaDiv,
    ChatInfoOverlayContainer
} from './style'

export interface ToogleChatMediaProps {
    toogleChatMedia: boolean;
}

export function Chat() {
    const [toogleChatMedia, setToogleChatMedia] = useState(true);

    return (
        <>
            <ChatContainerDiv>
                <ChatInfoContainerDiv>
                    <ChatInfoBoxDiv>
                        <ChatInfoChatDiv onClick={() => setToogleChatMedia(true)} toogleChatMedia={toogleChatMedia}>Chat</ChatInfoChatDiv>
                        <ChatInfoMediaDiv onClick={() => setToogleChatMedia(false)} toogleChatMedia={toogleChatMedia}>Media</ChatInfoMediaDiv>
                        <ChatInfoOverlayContainer toogleChatMedia={toogleChatMedia} />
                    </ChatInfoBoxDiv>
                </ChatInfoContainerDiv>
            </ChatContainerDiv>
        </>
    )
}
