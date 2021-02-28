import { useSelector } from 'react-redux'
// Create a new user progress
export const createNewProgress = (userId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
  
        // Check if the user exist already      
        firestore.collection("users").doc(userId).get().then((documentUser) => {
            if (!documentUser.exists) {
                
                const categories = {
                    learn: '0',
                    game: '0',
                    word_completion: '0',
                    Test: '0'
                }
                // Add a NEW user progress, should always be 0 at the beginning.
                firestore.doc('users/' + userId).set({
                    beginners: categories,
                    students: categories,
                    advancers: categories,
                    business: categories,
                    spoken: categories
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


export const updateProgress = (category, level) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        
        // Get the current progress of the user in this level and this category.
        const currentProgress = parseInt(getState().firebase.profile[level][category])
        // console.log(currentProgress, category, level)

        // If the current progress is zero, then update.(so should not update twice)
        if (currentProgress == 0) {
            const newProgress = 25
            
            // async call to DB
            firebase.updateProfile({ [level]: {[category]: String(newProgress)} }).then(
                dispatch({
                    type: 'UPDATE_PROGRESS',
                })
            )
        }
        
        
    }
}