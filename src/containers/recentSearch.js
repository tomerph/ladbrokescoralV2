import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchSongs} from '../actions/index';
import {setTerm} from '../actions/index';

class RecentSearch extends Component {

  onItemClick(term) {
    this.props.fetchSongs(term);
    this.props.setTerm(term);
  }

  render() {

    var recent = this.props.recentSearch.map((search) => {
      return (
        <li onClick = {() => {this.onItemClick(search)}}>
          <p> {search} </p>
        </li>
      )

    });


    return (
      <div >
        <h2> Recent Search </h2>
          <ul> {recent} </ul>
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    recentSearch: state.recentSearch,
    term: state.term
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSongs, setTerm}, dispatch)
};



export default connect(mapStateToProps, mapDispatchToProps)(RecentSearch);
