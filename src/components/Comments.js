import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import * as actionCreators from "../redux/actions/actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Comments extends React.Component {
  constructor(props){
    super(props);
    
  }
  /*componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }*/
  
  render() {
    return (
      <>
        <div>
          <div className="h3 mt-3 pt-3">Comments</div>
        </div>
        <div className="mt-2 pt-3">
          {this.props.comments.map(person => <div>{person}</div>)}
        </div>
      </>

    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  action: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    action:bindActionCreators(actionCreators,dispatch)
  }
};
function mapStateToProps(state) {
  
  return { comments: state.Comm };
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
//export default Comments;