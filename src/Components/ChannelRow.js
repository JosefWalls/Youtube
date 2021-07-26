import React from 'react';
import "./ChannelRow.css";
import {Avatar} from "@material-ui/core";
import {CheckCircleOutlineOutlined} from "@material-ui/icons";

function ChannelRow({image, channel, verified, subscribers, numOfVideos, description}){
    return (
        <div className="channelRow">
            <Avatar 
                clas
                className="channelRow__logo" alt={channel} src={image}
            />
            <div className="channelRow__text">
                <h4>{channel} {verified ? <CheckCircleOutlineOutlined/>:null}</h4> 
                <p>{subscribers} subscribers • {numOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

// ="https://i2-prod.mirror.co.uk/incoming/article6355529.ece/ALTERNATES/s1200c/Wrestling-superstar-Hulk-Hogan.jpg"

export default ChannelRow;