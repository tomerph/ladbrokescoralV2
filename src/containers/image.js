import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SC from 'soundcloud';

import {playSong} from '../actions/index';



class Image extends Component {
// Stream and ply the song request
  play(id) {
    SC.stream('/tracks/' + id).then(function(player) {

      player.play().then(function() {
        console.log('Playback started!');
      }).catch(function(e) {
        console.error('Playback rejected. Try calling play() from a user interaction.', e);
      });
    });
  }

  render() {

    if (!this.props.selectedSong) {
        return ( < h2 >Please Select song < /h2>)
      }

      return (
        <div>
            <img id='main-image'   onClick={() => {this.play(this.props.selectedSong.id)}}
            src={this.props.selectedSong.artwork_url} width='100px' height='100px'/>
            <p>Title: {this.props.selectedSong.title}</p>
            <p>Genre: {this.props.selectedSong.genre}</p>
        </div>

      )
    }
  }



  function mapStateToProps(state) {
    return {
      selectedSong: state.selectedSong
    }
  };

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({playSong}, dispatch)
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Image);
