import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import SC from 'soundcloud';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App1 extends Component{

  constructor(props){
  super(props);


  SC.initialize({
client_id: 'ggX0UomnLs0VmW7qZnCzw',
redirect_uri: 'http://example.com/callback'
});


}

  render(){

    return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );
  }
}
ReactDOM.render(<App1 />, document.querySelector('.container'));
