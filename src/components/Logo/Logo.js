import React from 'react';
import classes from './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png';
const logo = (props) => (
    <div className={classes.Logo} style={{height: props.heigth}}>
        <img src = {burgerLogo} alt="BurgerBuilder" />
    </div>
);

export default logo;