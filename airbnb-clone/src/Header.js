import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__icon" 
            src="https://1000marche.net/wp-content/uploads/2020/03/airbnb-logo.png" 
            alt="" />
            </Link>

            <div className="header__center">
                <input type="text" placeholder="Start your search" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />

            </div>
            
        </div>
    )
}

export default Header
