import styled from 'styled-components'

export const SideBarContainerDiv = styled.div`
    background-color: ${props => props.theme.colors.sideBar_Background};
    flex: 1;
    max-width: 300px;
    padding: 0 20px;
    display: flex;
    gap: 15px;
    flex-direction: column;
`;