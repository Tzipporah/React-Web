import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import React from 'react';
import './components/pages/SignUp.css';
import MainPage from'./components/pages/MainPage'
import './firebase-styling.global.css'; // Import globally.
import { Button } from './components/Button';

firebase.initializeApp({
    apiKey: "AIzaSyDEQgwjdPPsuxKfX9PIO-EdgLqWRgjZFJc",
    authDomain: "react-english-web.firebaseapp.com"
  })
  
  class Firebase extends React.Component {
    state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }

    
    
    render() {
      return (
        <>
          {this.state.isSignedIn ? 
          // User is sigend in, display the main page content.
          (
            <MainPage 
                signOut={() => firebase.auth().signOut()} 
                userName={firebase.auth().currentUser.displayName}
                profilePicture={firebase.auth().currentUser.photoURL}/>
          ) : 
          // User is signed out, dispaly login options.
          (

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
          )}
        </>
      )
    }
  }
  
  export default Firebase
  