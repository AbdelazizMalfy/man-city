import React from 'react'
import { ManCityLogo } from './ui/Icons';


const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <ManCityLogo 
                link='true'
                linkTo='/'
                width='70px'
                height='70px' />
            </div>
            <div className="footer_discl">
                Manschester city 2019.All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;