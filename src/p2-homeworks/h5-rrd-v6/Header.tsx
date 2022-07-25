import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <div className={'boxLink'}>
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'/junior+'}>junior+</NavLink>
        </div>
    )
}

export default Header
