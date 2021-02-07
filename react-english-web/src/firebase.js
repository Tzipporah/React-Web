import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import React from 'react';
import './components/pages/SignUp.css';
import MainPage from'./components/pages/MainPage'
import './firebase-styling.global.css'; // Import globally.
import { Redirect } from 'react-router-dom';

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
          {this.state.isSignedIn ? (
            <MainPage signOut={() => firebase.auth().signOut()} 
            userName={firebase.auth().currentUser.displayName}
            profilePicture={firebase.auth().currentUser.photoURL}/>
          ) : (
            <div  className='sign-in-container'>
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
  