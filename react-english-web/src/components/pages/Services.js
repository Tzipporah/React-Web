import React from 'react';
import '../../App.css';

import Navbar from '../Navbar'
import Cards2 from '../Cards2'

export default function Services(props) {
    return (
        <>
        <Navbar signOut={props.signOut} userName={props.userName} profilePicture={props.profilePicture}/>
        <Cards2 />
        </>
    );
  }

  
  
  
