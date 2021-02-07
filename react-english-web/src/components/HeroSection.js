import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  
  return (
    <div className='hero-container'>
      
      <video src='/videos/spincity.mp4' autoPlay loop muted />
      <h1>אנגלית</h1>
      <p>.לעתיד שלך.שלנו</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          כניסה
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          הרשמה <i className='fas fa-portrait' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
