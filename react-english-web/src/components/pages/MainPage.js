import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import Levels_cards from '../Levels_cards'
import Footer from '../Footer'


export default function MainPage() {

  return (
    <>
      <Navbar/>
      <Levels_cards/>
      <Footer/>
    </>
  );
}
