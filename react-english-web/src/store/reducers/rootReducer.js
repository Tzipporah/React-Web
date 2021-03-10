import authReducer from './authReducer'
import userProgressReducer from './userProgressReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

// Combine all the reducers: authentication, user progress, firestore, firebase.
const rootReducer = combineReducers({
  auth: authReducer,
  progress: userProgressReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer