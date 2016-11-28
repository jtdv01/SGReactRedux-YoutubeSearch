import React, { Component } from 'react';

// Components
import VideoList from './video_list';
import { SearchBar } from './search_bar';
import VideoDetail from './video_detail';

import ytsearch_api_key from '../ytsearch_api_key';
import YTSearch from 'youtube-api-search';
// Assumes this as an export

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfing');
  }

  videoSearch(term){
    YTSearch({key: ytsearch_api_key, term: term},(videos) =>{
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchTermFunc={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
