import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import * as actionCreators from "../redux/actions/actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Posts extends React.Component {
  constructor(props){
    super(props);
   
  
  }
  /*componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }*/

  render() {
    return (
      <div >
          <div className="h3 mt-3 pt-3">Posts</div>
          <div className="mt-2 pt-3">{this.props.posts.map((a)=>
          <div>
              {a[0]}  {a[1]}
          </div>
          )}</div>
          
      </div>
       

    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  action:PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    action:bindActionCreators(actionCreators,dispatch)
  }
};
function mapStateToProps(state) {
    return {
      
      posts:state.currPosts
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
//export default Posts;