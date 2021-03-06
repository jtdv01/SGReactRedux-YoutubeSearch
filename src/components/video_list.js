import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  const videoItems = props.videos.map(x => {
    // etag is a unique id from the youtube api
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={x.etag} video={x}
      />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
