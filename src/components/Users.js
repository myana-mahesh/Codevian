import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import '../styles/Users.css'
import * as actionCreators from "../redux/actions/actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Users extends React.Component {
  constructor(props){
    super(props);
  
  
  }
  /*componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }*/

  render() {
    return (
      <div>
          <div className="h3 mt-3 pt-3">Users</div>   
          <div  className="mt-2 pt-3">
              {this.props.users.map(person => 
              <div key={person.id} className="users" onClick={()=>this.handleClick(person.id)}>
                <div className="UserName">
                    {person}
                </div>
              </div>)}
          </div>
      </div>

    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  action:PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    action:bindActionCreators(actionCreators,dispatch)
  }
};

function mapStateToProps(state) {
  console.log(state)
  return { users: state.users };
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);

//export default Users;