import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

// Give the user the options to sign in, or sign up, using HeroSection component.
function Home() {
  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
