
import SC from 'soundcloud';


export const FETCH_SONGS='FETCH_SONGS';
export const SET_TERM='SET_TERM';
export const SELECTED_SONG='SELECTED_SONG';
export const RECENT_SEARCH = 'RECENT_SEARCH';

export function fetchSongs(term){


  const request = SC.get('/tracks', {
    q: term, license: 'cc-by-sa'
  }).then((tracks) => {
  return tracks;
});



  return{
    type:FETCH_SONGS,
    payload:request
  }
}

export function fetchSongs2(term){


  let request = SC.get('/tracks', {
    q: term, license: 'cc-by-sa'
  }).then((tracks) => {
  return tracks;

});




  return{
    type:FETCH_SONGS2,
    payload:request
  }
}

export function setTerm(term){
  return{
    type:SET_TERM,
    payload:term
  }
}

export function addToRecentSearch(term){
  return{
    type:RECENT_SEARCH,
    payload:term
  }
}

export function selectedSong(song){
  return{
    type:SELECTED_SONG,
    payload:song
  }
}
