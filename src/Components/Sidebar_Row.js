import React from 'react';
import "./Sidebar_Row.css";
import {Home} from "@material-ui/icons"

function Sidebar_Row({Icon, title, Selected}){
    return (
        <div className={`sidebarRow ${Selected && "selected"}`}>   
            <Icon className="sidebarRow__icon"/>
            <h1 className="sidebarRow__title">{title}</h1>
        </div>
    )
}

export default Sidebar_Row;