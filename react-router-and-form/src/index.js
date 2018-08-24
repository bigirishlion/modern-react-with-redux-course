import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <h1>Hello!</h1> }
}

class Goodbye extends React.Component {
  render() { return <h1>Goodbye!</h1> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Header
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
        Footer
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
