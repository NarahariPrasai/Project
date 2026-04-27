import React from 'react'
import Home from './Home'
import { Link, Navlink } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About'
import Search from './Components/Search'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'

const Navbar = () =>{
    return(
        <div>
            <ul>
                <li>
                    <Navlink to="/" className="">PageTurn</Navlink>
                </li>
                <li>
                    <Navlink to="/home" className={({isActive}) => isActive? "active_link" : ""}>Home</Navlink>
                </li>
                <li>
                    <Navlink to="/about" className={({isActive}) => isActive? "active_link" : ""}>About</Navlink>
                </li>
                 <li>
                    <Navlink to="/myorders" className={({isActive}) => isActive? "active_link" : ""}>MyOrders</Navlink>
                </li>
                 <li>
                    <Navlink to="/search" className={({isActive}) => isActive? "active_link" : ""}>Search</Navlink>
                </li>
                <li>
                    <Navlink to="/wishlist" className={({isActive}) => isActive? "active_link" : ""}>Wishlist</Navlink>
                </li>
                <li>
                    <Navlink to="/Cart" className={({isActive}) => isActive? "active_link" : ""}>Cart</Navlink>
                </li>
                <li>
                    <Navlink to="/Login" className={({isActive}) => isActive? "active_link" : ""}>Login</Navlink>
                </li>
                <li>
                    <Navlink to="/register" className={({isActive}) => isActive? "active_link" : ""}>Register</Navlink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
