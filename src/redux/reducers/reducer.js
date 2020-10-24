let defaultState={
  currPosts:[],
  users:[],
  Comm:[]
}

export default function PostsReducer(state = defaultState, action) {
    switch (action.type) {
      case "LoadPosts":
        return {...state, currPosts:action.posts};
      case "LoadUsers":
        return {...state,users:action.users};  
      case "LoadComm":
        console.log(action.Comm);
        return {...state,Comm:action.Comm};
      default:
        return state;
    }
  }
  