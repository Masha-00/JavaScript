import React from "react";
import classes from '../style/videoDetails.module.css'

class VideoDetails extends React.Component {
    render() { 
        if(this.props.video){
            const linkVideo = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <div>
                    <iframe className={classes.currentVideo} src={linkVideo} allowFullScreen title="Video player"></iframe>
                </div>
                <div className={classes.info}>
                    <h3>{this.props.video.snippet.title}</h3>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        );
        } else {
            return (
                <div>
                    <h2>Here will be video</h2>
                </div>
            );
        }
    }
}
 
export default VideoDetails;