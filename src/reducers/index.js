import { combineReducers } from 'redux';
import ReducerSongs from './reducer_songs';
import ReducerSelectedSong from './reducer_selected_song';
import ReducerRecentSearch from './reducer_recent_search';
import ReducerTerm from './reducer_term';

const rootReducer = combineReducers({
  songs: ReducerSongs,
  selectedSong:ReducerSelectedSong,
  recentSearch: ReducerRecentSearch,
  term: ReducerTerm
});

export default rootReducer;
