let defaultState={
    user:[]
  }
  
  export default function UserReducer(state = defaultState, action) {
      switch (action.type) {
        case "LoadUser":
          return {...state, user:action.user};
          
        default:
          return state;
      }
    }