import React from 'react';
import "./Sidebar.css";
import Sidebar_Row from './Sidebar_Row';
import {Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined} from "@material-ui/icons"

function Sidebar(){
    return (
        <div className="sidebar">
            <Sidebar_Row title="Home" Icon={Home} Selected={true}/>
            <Sidebar_Row title="Trending" Icon={Whatshot} Selected={false}/>
            <Sidebar_Row title="Subscriptions" Icon={Subscriptions} Selected={false}/>
            <hr/>
            <Sidebar_Row title="Library" Icon={VideoLibrary} Selected={false}/>
            <Sidebar_Row title="History" Icon={History} Selected={false}/>
            <Sidebar_Row title="Your Videos" Icon={OndemandVideo} Selected={false}/>
            <Sidebar_Row title="Watch Later" Icon={WatchLater} Selected={false}/>
            <Sidebar_Row title="Liked Videos" Icon={ThumbUpAltOutlined} Selected={false}/>
            <Sidebar_Row title="Show More" Icon={ExpandMoreOutlined} Selected={false}/>
            <hr/>
        </div>
    )
}

export default Sidebar;