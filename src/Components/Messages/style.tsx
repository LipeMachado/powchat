import styled from 'styled-components'

export const MessagesContainerDiv = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 10px;
    height: calc(100% - 120px);
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #7923CF;
        border-radius: 20px;
        border: 3px solid white;
    }
`;