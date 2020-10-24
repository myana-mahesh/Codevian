import axios from 'axios';

export function GetPosts(){
    
    return async (dispatch)=>{
        try {
            const result=[]
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            const json = response.data[0];
            for(var i in json)
            result.push([i, json[i]]);

            dispatch(LoadPosts(result));
        } catch (err) {
            console.log(err);
        }
    }
}


export function GetUsers(){
    
    return async (dispatch)=>{
        try {
            const result=[]
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            const json = response.data[0];
            for(var i in json)
            result.push([i, json[i]]);
            dispatch(LoadUsers(result[1]));
        } catch (err) {
            console.log(err);
        }
    }
}
export function GetComments(){
    
    return async (dispatch)=>{
        try {
            const result=[]
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
            const json = response.data[0];
            for(var i in json)
            result.push([i, json[i]]);

            dispatch(LoadComments(result[4]));
            console.log(json);
        } catch (err) {
            console.log(err);
        }
    }
}

export  function LoadUsers(users) {

    return { type: "LoadUsers", users:users };
  }
  export  function LoadComments(Comm) {
    console.log(Comm);
     return { type: "LoadComm", Comm:Comm };
   }
export default function LoadPosts(posts) {
    return { type: "LoadPosts", posts:posts };
  }
