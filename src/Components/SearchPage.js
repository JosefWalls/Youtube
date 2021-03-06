import React from 'react';
import "./SearchPage.css";
import {TuneOutlined} from "@material-ui/icons";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage(){
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image={'data:image/jpeg;base64,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'} 
                channel="Rickay Steamboat" 
                verified={true} 
                subscribers={26} 
                numOfVideos={1} 
                description={"Richard Hammond takes on the scapel-sharp Porsche Boxster S with the mighty BMW Z4M around the Top Gear track. "}
            />
            <hr/>
            <VideoRow
                views={63}
                subs={2}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                timestamp={"1 month ago"}
                channel={"Imagine Dragons Deez Nuts"}
                title={"Ronald Mcdonald Murdered my Boss!"}
                image={"https://www.chowhound.com/a/img/resize/390afd16dd37c417b63003c6389831705470556c/2018/07/Screen-Shot-2018-07-27-at-12.55.00-PM.png?fit=bounds&width=1200"}
            />
            <VideoRow
                views={63}
                subs={2}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                timestamp={"1 month ago"}
                channel={"Imagine Dragons Deez Nuts"}
                title={"Ronald Mcdonald Murdered my Boss!"}
                image={"https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3046082-poster-p-2-redesign-of-behind-the-hamburglar-redesign.jpg"}
            />
            <VideoRow
                views={63}
                subs={2}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                timestamp={"1 month ago"}
                channel={"Imagine Dragons Deez Nuts"}
                title={"Ronald Mcdonald Murdered my Boss!"}
                image={"https://www.chowhound.com/a/img/resize/390afd16dd37c417b63003c6389831705470556c/2018/07/Screen-Shot-2018-07-27-at-12.55.00-PM.png?fit=bounds&width=1200"}
            />
        </div>
    )
}


export default SearchPage;