import styled from 'styled-components'

export const MessageContainerDiv = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    
    &.owner {
        flex-direction: row-reverse;
        
        .messageContent{
            align-items: flex-end;
        }

        p {
            background-color: ${props => props.theme.colors.message_BackgroundColorParagraphOwner};
            color: ${props => props.theme.colors.message_TextColorParagraphOwner};
            border-radius: 10px 0px 10px 10px;
        }
    }
`;

export const MessageInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    color: ${props => props.theme.colors.message_TextTimeSendMessage};
    
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${props => props.theme.colors.message_BorderImageProfile};
    }
`;

export const MessageContentDiv = styled.div`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        color: ${props => props.theme.colors.message_TextColorParagraph};
        background-color: ${props => props.theme.colors.message_BackgroundColorParagraph};
        padding: 10px 20px;
        border-radius: 0px 10px 10px 10px;
        max-width: max-content;
    }

    img {
        width: 50%;
    }
`;