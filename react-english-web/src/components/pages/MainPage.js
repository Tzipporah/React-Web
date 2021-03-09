import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import LevelsCards from '../cards/LevelsCards'
import Footer from '../Footer'


export default function MainPage() {

  return (
    <>
      <Navbar/>
      <LevelsCards/>
      <Footer/>
    </>
  );
}
