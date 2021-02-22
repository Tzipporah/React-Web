 
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

export const signIn = (userDetails) => {
    console.log(userDetails)
    return {type: 'LOGIN_SUCCESS', payload: userDetails}}