import React from 'react';
import { Link } from 'react-router-dom';

import manCityLogo from '../../Resources/images/logos/manchester_city_logo.png'

export const ManCityLogo = (props) => {

    const template = <img 
        className='img-cover' 
        style={{width: props.width, height: props.height}} 
        src={manCityLogo}
        alt="logo"/>

        
    if(props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    }else {
        return template
    }

}  