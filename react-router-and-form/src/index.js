import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';

import PostIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// show or hide depending on the path
class Hello extends React.Component {
  render() { return <div>Hello</div>; }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye</div>; }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
        {/* <Route path="/hello" component={Hello}></Route>
        <Route path="/goodbye" component={Goodbye}></Route> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
