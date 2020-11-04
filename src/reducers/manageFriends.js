export function manageFriends(state, action){


  switch(action.type){

     case 'ADD_FRIEND':
       return {friends: state.friends.push(action.friend),...state }
       case 'REMOVE_FRIEND':
         
         return {...state,friends: state.friends.filter(friend=> parseInt(friend.id) !== parseInt(action.id)) }

       default:
         return state

  }
}
