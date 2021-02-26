// Create a new user progress
export const createNewProgress = (userId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
  
        // Check if the user exist already      
        firestore.collection("users").doc(userId).get().then((documentUser) => {
            if (!documentUser.exists) {
            
                // Add a NEW user progress, should always be 0 at the beginning.
                firestore.doc('users/' + userId).set({
                    beginners: '0',
                    students: '0',
                    advancers: '0',
                    business: '0',
                    spoken: '0'
                }).then(() => {
                    dispatch({ type: 'CREATE_PROGRESS' });
                }).catch((err) => {
                    dispatch({ type: 'CREATE_PROGRESS_ERROR', err});
                });
            }
            else {
                dispatch({ type: 'PROGRESS_EXISTS' });
            }
            
        })
        
    }
}


export const updateProgress = (level) => {
    return (dispatch, getState, { getFirebase }) => {
        // async call to DB
        const firebase = getFirebase();

        firebase.updateProfile({ '{level}': 'admin' }).then(
            dispatch({
                type: 'UPDATE_PROGRESS',
            })
        )
        
    }
}