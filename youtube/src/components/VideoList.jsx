import React, { Component } from "react";
import VideoItem from './VideoItem';

export default class VideoList extends Component {
    render() { 
        return(
            <div>
               {
                this.props.videos.map(video => <VideoItem key={video.id.videoId} choosenVideo={this.props.choosenVideo} video={video} />)
               }
            </div>
        ); 
    };
}