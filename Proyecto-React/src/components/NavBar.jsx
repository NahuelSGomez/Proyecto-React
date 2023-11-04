import React from 'react';

import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, CartShop, BarsMenu } from './NavBarElements'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    PET PARADISE
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            Categorias
                        </MenuItemLink>
                    </MenuItem>
                    
                    <MenuItem>
                        <MenuItemLink>
                            Productos destacados
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>

                    <BarsMenu />

                    <CartShop>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        Carrito
                    </CartShop>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default NavBar