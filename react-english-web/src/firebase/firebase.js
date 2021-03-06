import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import React from 'react';
import '../components/pages/SignUp.css';
import  { Redirect } from 'react-router-dom'
import './firebase-styling.global.css'; // Import globally.
import { Button } from '../components/Button';
import firebase from '../config/fbconfig'
import { connect } from 'react-redux'
import { createNewProgress } from '../store/actions/userProgressAction'

class Firebase extends React.Component {
    
    state = { isSignedIn: false } // State if user is signed in
    
    // Options for user to log in
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    }
  
    componentDidMount = () => {
      this.unsubscribeUserAuthStateChangedListener = firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        // In case the user is a new user, create a new progress.
        if (this.state.isSignedIn){
          this.props.createNewProgress(user.uid)
        }
      })
    }

    componentWillUnmount() {
      if (this.unsubscribeUserAuthStateChangedListener) {
        this.unsubscribeUserAuthStateChangedListener();
      }
    }

    render() {
      const returnComp = this.state.isSignedIn ? 
          // User is sigend in, display the main page content.
          <Redirect to='/main-page'  />
          :
          // User is signed out, dispaly login options.
          <>
            <div  className='sign-in-container'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkTo='/'
            >
                בית <i className='fas fa-home'/>
            </Button>
            <StyledFirebaseAuth
              className='my-firebaseui-container'
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}/>
            </div>
          </>
    return returnComp
           
    }
  }
  

// In case the user is new user, create for him a new document of progress chracking.
const mapDispatchToProps = (dispatch)=> {
  return {
    createNewProgress: (userID) => dispatch(createNewProgress(userID))
  }
}

export default connect(null, mapDispatchToProps)(Firebase)
