import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={'boxLink'}>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>
        </div>
    )
}

export default Header
