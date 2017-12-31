import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchSongs} from '../actions/index';
import {setTerm} from '../actions/index';
import {addToRecentSearch} from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);
    

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.props.setTerm(event.target.value);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchSongs(this.props.term);
    this.props.addToRecentSearch(this.props.term);

  }

  render(){

    return(

      <form onSubmit={this.onFormSubmit} className='btnsearch' >
        <input placeholder='Search'
          onChange={this.onInputChange} value={this.props.term}/>
            <span>
              <button type='submit'>Submit</button>
          </span>
      </form>

    );
  };
}

function mapStateToProps(state){
  return { term: state.term}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchSongs, addToRecentSearch, setTerm}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
