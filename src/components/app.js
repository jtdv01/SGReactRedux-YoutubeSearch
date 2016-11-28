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
    this.state = { videos: [] };
    console.log(ytsearch_api_key);
    YTSearch({key: ytsearch_api_key, term: 'surfboards'},(videos) =>{

      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
