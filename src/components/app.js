import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import Api_Key from '../../constants';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // currently set at five videos
    YTSearch({ key: Api_Key, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }


  render() {
    return (
      <div>
        <h1> React Tutorial </h1>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => {
            this.onVideoSelect(selectedVideo);
          }}
        />
      </div>
    );
  }
}

export default App;
