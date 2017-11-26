import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails'
const API_KEY = 'AIzaSyC5I7DESnVK7uyN_DLPH3X6UjTFoUGZWdI';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null
        };
        this.videoSearch('Taylor Swift');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:term},(videos) => {
            // console.log(data);
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
            // When the key and the property are same. They can be written as :
            // this.setState({videos});
            });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                     onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
);