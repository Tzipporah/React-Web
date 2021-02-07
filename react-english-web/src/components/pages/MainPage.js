import React from 'react';
import '../../App.css';

import Navbar from '../Navbar'
import Cards from '../Cards'

export default function MainPage(props) {
  return (
    <>
    <Navbar signOut={props.signOut} userName={props.userName} profilePicture={props.profilePicture}/>
    <Cards />
    </>
  );
}
