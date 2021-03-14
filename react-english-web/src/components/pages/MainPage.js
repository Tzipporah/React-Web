import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import LevelsCards from '../cards/LevelsCards'
import Footer from '../Footer'


export default function MainPage() {
  // Give the user the options to choose the level he wants, using LevelsCards component.
  return (
    <>
      <Navbar/>
      <LevelsCards/>
      <Footer/>
    </>
  );
}
