import React, {useState} from 'react';
import "./Header.css";
import { Search, VideoCall, Menu, Apps, Notifications, AccountBox, CancelPresentation, Brightness4} from '@material-ui/icons';
import {Avatar, Modal, Input} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Header(){

    const [searchInput, setSearchInput] = useState("");
    const [displayAuth, setDisplayAuth] = useState(true);
    const [modalStyle] = useState(getModalStyle());
    const classes = useStyles();
    const [open, setOpen] = useState(false);

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
                <Avatar alt="" src="https://i2-prod.mirror.co.uk/incoming/article6355529.ece/ALTERNATES/s1200c/Wrestling-superstar-Hulk-Hogan.jpg" onClick={() => open ? setOpen(false): setOpen(true)}/>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <div className="header__popUpBox">
                        <p><span className="header__popUpBox__icon"><AccountBox/> </span>Your Channel</p>
                        <p><span className="header__popUpBox__icon"><CancelPresentation/> </span>Sign Out</p>
                        <p><span className="header__popUpBox__icon"><Brightness4/> </span>Appearance</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


export default Header;