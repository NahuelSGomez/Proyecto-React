import React from 'react';

import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, CartShop, BarsMenu } from './NavBarElements'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'

export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    PET PARADISE
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink href="#categories-section">
                            Categorias
                        </MenuItemLink>
                    </MenuItem>
                    
                    <MenuItem>
                        <MenuItemLink href="#featured-section" >
                            Productos destacados
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>

                    <BarsMenu>
                        <MenuIcon style={{ fontSize: '400x' }} />
                    </BarsMenu>

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