import React from 'react'
import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="container main">
      <div className="jumbotron mt-4">
        <div className="h2 ml-auto ">Heading</div>
      </div>
      <div className="row">
          <div className="col-sm-4">
                <Users/>
          </div>
          <div className="col-sm-4">
            <div className="posts">
                <Posts/>
              </div>
          </div>
          <div className="col-sm-4">
            <div className="comments">
              <Comments/>
            </div>
          </div>
      </div>
      <div className="mt-5 pd-5">
        <Link to="posting"><h4>Posting Page</h4></Link>
      </div>
      
    </div>
    
  );
}

export default App;
