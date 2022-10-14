import styled from 'styled-components'

export const ChatsCardBoxDiv = styled.div`
    width: 100%;
    height: 50px;
    box-shadow: 0px 8px 40px rgba(121, 35, 207, 0.3);
    border-radius: 14px;
    background-color: ${props => props.theme.colors.purple600};
    display: flex;
    align-items: center;
    position: relative;
`;

export const ChatsImageProfileDiv = styled.div`
    margin: 0 20px 0 20px;
    display: flex;
    align-items: center;
    position: relative;

    div {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #46D362;
        border: 2px solid ${props => props.theme.colors.white};
        position: absolute;
        top: -2px;
        right: -3px;
    }

    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
`;

export const ChatsNamePreviewMessageDiv = styled.div`
    color: ${props => props.theme.colors.white};

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 12px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 10px;
    }
`;

export const ChatsVisualizationDiv = styled.div`
    margin: 0 20px 0 20px;
    gap: 5px;
    display: flex;
    position: absolute;
    height: 5px;
    right: 5px;
    bottom: 12px;

    span {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #46D362;
    }
`;