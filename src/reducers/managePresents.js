export function managePresents(state = {numberOfPresents: 0}, action)
    {
        switch(action.type) {
            case "INCREASE":
                return Object.assign({}, state.numberOfPreents, {
                    numberOfPresents: state.numberOfPresents +1
                })
            default:
                return state
        }
        
    }