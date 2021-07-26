import React from 'react';
import "./Header.css";
import { Search, VideoCall, Menu, Apps, Notifications } from '@material-ui/icons';
import {Avatar} from "@material-ui/core";


function Header(){
    return (
        <div className="header">
            <div className="header__left">
                <Menu/>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="Youtube logo" className="header__logo"/>
            </div>

            <div className="header__input">
                <input type="type" placeholder="Search"/>
                <Search className="header__inputButton"/>
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