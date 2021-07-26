import React, {useState} from 'react';
import "./Header.css";
import { Search, VideoCall, Menu, Apps, Notifications } from '@material-ui/icons';
import {Avatar} from "@material-ui/core";
import {Link} from 'react-router-dom';


function Header(){

    const [searchInput, setSearchInput] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <Menu/>
                <Link to="/">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="Youtube logo" className="header__logo"/>
                </Link>
            </div>

            <div className="header__input">
                <input type="type" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <Link to={`/Search/${searchInput}`}>
                    <Search className="header__inputButton"/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCall className="header__icon"/>
                <Apps className="header__icon"/>
                <Notifications className="header__icon"/>
                <Avatar alt="" src="https://i2-prod.mirror.co.uk/incoming/article6355529.ece/ALTERNATES/s1200c/Wrestling-superstar-Hulk-Hogan.jpg"/>
            </div>
        </div>
    )
}


export default Header;