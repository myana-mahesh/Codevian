import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {GetComments, GetPosts, GetUsers} from './redux/actions/actions'
import configureStore from './redux/configureStore';
import Posting from './components/Posting.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const store = configureStore();


store.dispatch(GetPosts());
store.dispatch(GetUsers());
store.dispatch(GetComments());

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
    <Switch>
          <Route path="/posting" component={Posting}>
          </Route>
          <Route exact path="/" component={App}>
          
          </Route>
      </Switch>
      </Router> 
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
