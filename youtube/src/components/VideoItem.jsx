import React from "react";
import classes from '../style/videoItem.module.css'

export default class VideoItem extends React.Component {
    render() { 
        return (
            <div className={classes.videoItem} onClick={() => this.props.choosenVideo(this.props.video)}>
               <img src={this.props.video.snippet.thumbnails.medium.url} alt="111" /> 
               <h4>{this.props.video.snippet.title}</h4>
            </div>
        );
    }
}