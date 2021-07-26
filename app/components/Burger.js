import React from 'react'

// Importing Styles
import burgerStyles from "../styles/Burger.module.css";

// Icons
import {
    GiHamburgerMenu
} from 'react-icons/gi'

const Burger = ({ open, setOpen}) => {
    return (
        <button className={burgerStyles.burger} open={open} onClick={() => setOpen(!open)} >
            <GiHamburgerMenu style={{color: '#fff', width: '26px', height: '26px'}}/>
        </button>
    )
}

export default Burger