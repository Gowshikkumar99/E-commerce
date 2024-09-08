import React from 'react';
import brand from '../../assets/images/brand.png';
import {Button} from '../Buttons/Buttons';

function NavMenu() {
    return (
        <div className="nav-menu">
                <div className="nav-menu__brand-name">
                    <img src={brand} alt='brand'/>
                </div>
                <div className="nav-menu__items">
                    <ul>
                        <li className='item'>Home</li>
                        <li className='item'>Shop</li>
                        <li className='item'>Categories</li>
                        <li className='item'>Blog</li>
                    </ul>
                </div>
                <div className="nav-menu__btn-grp">
                    <Button route={''} text={""} onlyIcon={"yes"} icon={'cart'} variant={'btn-secondary'} notification={4}/>
                    <Button route={''} text={"Get Started"} icon={'arrow-right'} variant={'btn-primary'}/>
                </div>
        </div>    
        );
}

export default NavMenu
