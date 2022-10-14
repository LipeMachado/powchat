import styled from 'styled-components'

export const MessagesContainerDiv = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 10px;
    height: calc(100% - 100px);
    overflow: scroll;
`;