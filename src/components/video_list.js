import React from 'react';
import VideoListEntry from './video_list_entry.js';


const VideoList = ({ videos, onVideoSelect }) => {
  console.log('videolist', onVideoSelect)
  return (
    <ul className="col-md-4">
      {videos.map(video => (
        <VideoListEntry
          video={video}
          key={video.etag}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </ul>
  );
};


export default VideoList;
