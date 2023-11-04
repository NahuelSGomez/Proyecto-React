import React from 'react';
import { ContainerFooter, LogoContainerFooter, MenuFooter } from './FooterElements';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
    return (
        <ContainerFooter>
            <LogoContainerFooter>
                PET PARADISE
                <p>© 2023</p>
            </LogoContainerFooter>

            <MenuFooter>
                <FacebookIcon />
                <InstagramIcon />
                <WhatsAppIcon />
                <EmailIcon />
            </MenuFooter>

        </ContainerFooter>
    )
}