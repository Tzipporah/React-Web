import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbconfig'

const store = 
    createStore(
    rootReducer,
    // Compose store enhancers.
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase })), // Middleware for running async actions.
        reactReduxFirebase(fbConfig) // redux binding for firebase
    )
  );

export default store