import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from '../config/fbconfig'

// Holds all the stores of the app
const store = 
    createStore(
    rootReducer,

    // Compose store enhancers.
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), // Middleware for running async actions.
        reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true}), // redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
  );

export default store