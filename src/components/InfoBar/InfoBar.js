import React from 'react';

import './InfoBar.scss'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'


export default function InfoBar({room,users}) {
    
    return <div className='infobar-outer-container'>
        <div className='infobar-left-inner-container'>
            <img className='infobar-online-icon' src={onlineIcon} alt="online-icon" />
            <h3>{room+" "} </h3>
        </div>
        <h5>{users.length}</h5>
        <div className='infobar-right-inner-container'>
            
            <a href='/'><img src={closeIcon} alt='close-icon'/></a>
        </div>
    </div>;
}
