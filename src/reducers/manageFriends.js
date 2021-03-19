

export function manageFriends(state, action){
        switch (action.type) {
            case 'ADD_FRIEND':
                return {
                ...state, 
                friends: [
                    ...state.friends, 
                    action.friend
                ]}
                case 'REMOVE_FRIEND':
                    const indexOfFriendToRemove = state.friends.findIndex(friend => friend.id === action.id)
                    return {
                        ...state,
                            friends: [
                                ...state.friends.slice(0, indexOfFriendToRemove),
                                ...state.friends.slice(indexOfFriendToRemove + 1)
                            ]
                    }
                default:
                    return state;
                }
        }