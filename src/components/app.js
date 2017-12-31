import React, { Component } from 'react';

import SearchBar from '../containers/searchbar';
import TracksList from '../containers/tracks_list';
import Image from '../containers/image';
import RecentSearch from '../containers/recentSearch';



export default class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='left'>
          <SearchBar />
            <TracksList />
          </div>

            <div className='main'>
              <Image />
            </div>

              <div className='right'>
                <RecentSearch />
              </div>
      </div>
    );
  }
}
