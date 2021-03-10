  
const initState = {
  user: null
}

// Manipulte the state here.
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'SIGNOUT_SUCCESS':
      return {
        ...state
      }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload
      }
      
    default:
      return {
        ...state
      }
  }
};


export default authReducer;