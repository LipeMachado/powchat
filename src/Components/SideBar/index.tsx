import React from 'react'
import { Chats } from '../Chats'
import { NavBar } from '../NavBar'
import {
    SideBarContainerDiv,

} from './style'

export function SideBar() {
    return (
        <>
            <SideBarContainerDiv>
                <NavBar />
                <Chats />
            </SideBarContainerDiv>
        </>
    )
}
