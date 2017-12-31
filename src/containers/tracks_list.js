import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectedSong} from '../actions/index';
import {fetchSongs} from '../actions/index';



 var isClick = false;
 var group = false;
 var listItem =null;

 class TracksList extends Component{

//ons selected song
   select(song){
     let img = document.getElementById('main-image');
     this.props.selectedSong(song);
     img.style.display = 'none';
     setTimeout(function(){
      img.style.display = 'block'; }, 0);

   }
// get 6 more songs resaults
   fetchMore(){
     this.props.fetchSongs(this.props.term);
     isClick = !isClick;
 }
//change to tile view
 toGroup(){
   this.props.fetchSongs(this.props.term);
   group = !group;
   listItem='';
   document.querySelector('.group').style.display='flex';
   document.querySelector('.list').style.display='none';
 }
 //change to list view
 toList(){
   group =false;
   document.querySelector('.group').style.display='none';
   document.querySelector('.list').style.display='flex';
   this.props.fetchSongs(this.props.term);
 }



render(){

    if(!this.props.songs[0]){
      return (<div className='left'></div>)
    }
    // changed this to 5 items because soundcloud api return max 10 tracks
    if(!group){
      if(!isClick){
         listItem = this.props.songs[0].map((song,index) =>{
          while(index<=4){
          return (
            <li onClick={()=>{this.select(song)}} key={song.id}>
              <img src={song.artwork_url} width='100px' height='100px'/>
              <p>Title{song.title}</p>
              </li>
          );
        }

        });
      }
      else if(isClick){

         listItem = this.props.songs[0].map((song,index) =>{
          while(index>4){
            return (
                <li onClick={()=>{this.select(song)}} key={song.id}>
                  <img src={song.artwork_url} width='100px' height='100px'/>
                  <p>Title{song.title}</p>
                </li>
              );
          }

        });
      }
    }else{

    var groupItem = this.props.songs[0].map((song,index) =>{
       while(index<=5){
         return (

               <img src={song.artwork_url}
               onClick={()=>{this.select(song)}} key={song.id}/>


           );
       }

     });
    }



    return (
          <div className='left-in'>
              <ul className='list'>
                {listItem}
              </ul>

              <div className='group' >
                {groupItem}
              </div>


            <div className='bottom'>
              <a><span className='ion-arrow-right-a' onClick={()=>{this.fetchMore()}}></span></a>
                <a><span className='ion-clipboard' onClick={()=>{this.toList()}}></span></a>
                  <a><span className='ion-grid' onClick={()=>{this.toGroup()}}></span></a>
            </div>
        </div>

    )};

}


function mapStateToProps(state){
  return {songs: state.songs, term: state.term}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectedSong, fetchSongs}, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(TracksList);
