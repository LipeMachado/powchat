import styled from "styled-components";

export const NavBarContainerDiv = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 40px 10px;
    border-radius: 0 0 50% 50%;
    position: relative;
`;

export const NavBarBoxProfile = styled.div`
    display: flex;
    align-items: center;
`;

export const NavBarImageProfileDiv = styled.div`
    width: 50px;
    height: 50px;    
    margin-right: 15px;

    img {
        width: 100%;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.colors.sideBar_BorderImages};
    }
`;

export const NavBarNameStatusProfile = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;

export const NavBarSelectProfile = styled.div`
    width: 100px;
    height: 25px;
    padding: 10px;
    background-color: ${props => props.theme.colors.purple600};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    gap: 2px;

    select {
        background-color: ${props => props.theme.colors.purple600};
        color: ${props => props.theme.colors.white};
        font-size: 12px;
        outline: none;
        border: none;
    }
`;

export const NavBarDotStatusProfile = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #46D362;
`;

export const NavBarMenuDotsDiv = styled.div`
    position: absolute;
    right: 10px;
`;