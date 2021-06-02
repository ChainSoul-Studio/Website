import React from 'react'

// Importing Styles
import burgerStyles from "../styles/Burger.module.css";

const Burger = ({ open, setOpen}) => {
    return (
        <button className={burgerStyles.burger} open={open} onClick={() => setOpen(!open)} >
            <div className={burgerStyles.bar} />
            <div className={burgerStyles.bar}/>
            <div className={burgerStyles.bar}/>
        </button>
    )
}

export default Burger