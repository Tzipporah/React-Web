  
const initState = {

}

// Manipulte the state here.
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'SIGNOUT_SUCCESS':
      /*console.log(state);*/
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
};


export default authReducer;