const initState = {
    progressError: null
  }

const userProgressReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_PROGRESS':
        console.log('create new progress success')
        return {
          ...state,
          progressError: null
        }
  
      case 'CREATE_PROGRESS_ERROR':
        console.log('create progress error')
        return {
          ...state,
          progressError: action.err.message
        }
      case 'PROGRESS_EXISTS':
        console.log('user progress exists already, skipping creation')
        return {
          ...state,
          progressError: null
        } 
      default:
        return state
    }
  };
  
  export default userProgressReducer;