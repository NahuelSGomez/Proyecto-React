import React from 'react';

import { ContainerHero, HeroTop, LogoHero, SearchTop, HeroBottom, HeroInfo, HeroCartShop } from "./HeroElements";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from '../img&icons/Ellipse 1.svg';
import ImgHero from '../img&icons/Rectangle 9.svg'

export const Hero = () => {
    return (
        <ContainerHero>
            <HeroTop>
                <LogoHero>
                    <img src= { Logo } alt="logo" />
                    <h1>El paraiso para tu mejor amigo</h1>
                </LogoHero>
                <SearchTop>
                    <input type="text" placeholder='Buscar productos o categorías'></input>
                    <SearchIcon />
                </SearchTop>
            </HeroTop>
            <HeroBottom>
                <HeroInfo>
                    <div>
                    <p>Tu mascota es una parte importante de tu familia, y nosotros queremos que esté feliz y saludable.<br></br>
                    En Pet Paradise encontrarás todo lo que necesitas para que tu mascota tenga una vida plena y llena de amor.</p>
                    </div>
                    <HeroCartShop>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        Ir al Shop
                    </HeroCartShop>
                </HeroInfo>
                <img src={ImgHero} alt="perros" />
            </HeroBottom>
        </ContainerHero>
    )
}