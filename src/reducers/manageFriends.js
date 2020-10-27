// const action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi",
//       homewtown: "NYC",
//       id: 1
//     }
//   }
  
export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, {
                name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id
            }]}
        case "REMOVE_FRIEND":
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
        default:
            return state
    }
}
