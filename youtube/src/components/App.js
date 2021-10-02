import '../App.css';
import React, { Component } from 'react';
import SearchInput from './SearchInput';
import VideoList from './VideoList';
import { youtube } from '../api/youtube';
import VideoDetails from './VideoDetails';

export default class App extends Component {
  state = { videos: [], currentVideo: null };
  
  onSearchSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: { q: query }
    });
    this.setState({ videos: response.data.items })
  };

  choosenVideo = (video) => {
    this.setState({ currentVideo: video })
  };

  render() { 
    return (
    <div className="container">
      <SearchInput className="searchInput" onSubmit={this.onSearchSubmit} />
      <div className="content">
        <VideoDetails className="mainVideo" video={this.state.currentVideo} />
        <VideoList className="videos" choosenVideo={this.choosenVideo} videos={this.state.videos} />
      </div>
    </div>
    );
  };
}