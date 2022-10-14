import {
    NavBarContainerDiv,
    NavBarBoxProfile,
    NavBarImageProfileDiv,
    NavBarNameStatusProfile,
    NavBarDotStatusProfile,
    NavBarSelectProfile,
    NavBarMenuDotsDiv
} from './style'
import { DotsThreeOutlineVertical } from 'phosphor-react'

import ImageExample from '../../Assets/ImageExample.jpg';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <>
            <NavBarContainerDiv>
                <NavBarBoxProfile>
                    <NavBarImageProfileDiv>
                        <img src={ImageExample} />
                    </NavBarImageProfileDiv>
                    <NavBarNameStatusProfile>
                        <span>Lipe Machado</span>
                        <NavBarSelectProfile>
                            <NavBarDotStatusProfile />
                            <select name="select">
                                <option value="valor1">Online</option>
                                <option value="valor2">Offline</option>
                                <option value="valor3">Ausente</option>
                            </select>
                        </NavBarSelectProfile>
                    </NavBarNameStatusProfile>
                    <NavBarMenuDotsDiv>
                        {/* <DotsThreeOutlineVertical size={20} /> */}
                        <Link to="/">Sair</Link>
                    </NavBarMenuDotsDiv>
                </NavBarBoxProfile>
            </NavBarContainerDiv>
        </>
    )
}
