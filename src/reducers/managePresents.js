export function managePresents(state={numberOfPresents: 0}, action){

    switch (action.type) {
         case 'INCREASE' :
            return {numberOfPresents: state.numberOfPresents + 1}
            default:
            //    return {numberOfPresents: 0}
                 return state;

    }
    
}

//let state = {numberOfPresents: 0}
