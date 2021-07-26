import React from 'react';
import "./VideoRow.css";

function VideoRow({views, subs, description, timestamp, channel, title, image}){
    return (
        <div className="videoRow">
            <div className="videoRow__image">
                <img src={image} alt={channel}/>
            </div>
            <div className="videoRow__info">
                <h3>{title}</h3>
                <p>{channel} • <span id="videoRow__info__subs">{subs} subscribers</span> • {views} views • {timestamp}</p>
                <p id="videoRow__info__description">{description}</p>
            </div>
        </div>

    )
}

export default VideoRow;