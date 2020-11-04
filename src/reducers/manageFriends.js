export function manageFriends(state, action){


  switch(action.type){

     case 'ADD_FRIEND':
       return {friends: state.friends.push({ name: 'Joe', hometown: 'Boston', id: 101 }),...state }
       case 'REMOVE_FRIEND':
         
         return {...state,friends: state.friends.filter(friend=> parseInt(friend.id) !== parseInt(action.id)) }

       default:
         return state

  }
}
