import styled from 'styled-components'

export const InputMessageContainerDiv = styled.div`
    height: 10vh;
    background-color: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
`;

export const InputMessageOptions = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;

    svg {
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: ${props => props.theme.colors.inputMessage_BackgroundSVGOptions};
            color: ${props => props.theme.colors.inputMessage_ColorHovevrSVGOptions};
        }
    }
`;

export const InputMessageBoxInputDiv = styled.div`
    width: 96%;
    display: flex;
    position: relative;
`;

export const InputMessageInput = styled.input`
    width: 100%;
    height: 35px;
    border: 1px solid ${props => props.theme.colors.inputMessage_BorderColor};
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    padding: 4px 20px;
    color: ${props => props.theme.colors.inputMessage_TextBackground};
`;

export const InputMessageSendButton = styled.button`
    width: 80px;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: ${props => props.theme.colors.inputMessage_BackgroundButtonSend};
    color: ${props => props.theme.colors.inputMessage_TextButtonSend};
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover {
        background-color: ${props => props.theme.colors.inputMessage_BackgroundButtonSendHover};
    }
`;