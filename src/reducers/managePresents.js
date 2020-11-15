// export function managePresents(state, action){
//     let state = {numberOfPresents: 0}
//     let action = {type: 'INCREASE'}

//     function changeState(state, action){
//         switch (action.type) {
//           case 'INCREASE':
//             return {numberOfPresents: state.numberOfPresents + 1}
//           default:
//             return state;
//         }
//       }

//       changeState(state, action)

// }


export function managePresents(state = {
    numberOfPresents: 0,
  }, action) {
    switch(action.type) {
  
      case "INCREASE":
        return Object.assign({}, state, {
          numberOfPresents: state.numberOfPresents + 1
        });
  
      default:
        return state;
    }
  };