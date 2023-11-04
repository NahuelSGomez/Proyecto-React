import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.header`
    width: 100%;
    height: 56px;
    border-bottom: 3px solid #BFA893;
    background: #FFF;
    padding: 4px;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const LogoContainer = styled.div`
    color: #000;
    font-family: Cinzel;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10%;
`;

export const Menu = styled.ul`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`;

export const MenuItem = styled.li`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 930px){
        display: none;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;

    &:hover{
        color: #BFA893;
        border-bottom: 2px solid #593A2E;
        transition: 0.5s all ease;
    }
`;

export const CartShop = styled.button`
    display: flex;
    padding: 6px 20px 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: #593A2E;
    color: #FFF;
    text-align: center;
    font-family: "Monserrat", sans-serif;
    font-style: normal;
    letter-spacing: 0.1px;
    cursor: pointer;
    font-size: 14px;
`;

export const BarsMenu = styled(MenuIcon)`
    display: none;

    @media (max-width: 930px){
        display: block;
        font-size: 1.9rem;
    }
`;

