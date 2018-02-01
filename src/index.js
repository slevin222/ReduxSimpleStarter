import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
//Youtube api key
//AIzaSyDRh-HbC5g3mGWaTzVY002XxQRgbMBxaTE
//npm install --save youtube-api-search
const API_KEY = 'AIzaSyDRh-HbC5g3mGWaTzVY002XxQRgbMBxaTE';
//example API search
// YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
//     console.log(data);
// });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            videos: []
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
