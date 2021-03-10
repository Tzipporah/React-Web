import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import Firebase from '../../firebase/firebase'

export default function SignUp() {
  // Give the user the options to sign in, using Firebase.
  return (
    <>
    <Firebase/>
    <Footer/>
    </>
  );
  
}
