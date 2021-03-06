const initState = {
    progressError: null
  }

// Reducer to track status and for futer functionality
const userProgressReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_PROGRESS':
        // console.log('create new progress success')
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
        // console.log('user progress exists already, skipping creation')
        return {
          ...state,
          progressError: null
        } 
        case 'UPDATE_PROGRESS':
            console.log('update progress - success')
            return {
              ...state,
              progressError: null
            } 
        case 'ERROR':
          console.log('error')
          return state;
          break;
      default:
        return state
    }
  };
  
  export default userProgressReducer;