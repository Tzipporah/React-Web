import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Navbar from './Navbar';

function Cards2() {

  return (
    <div className='cards'>
      {<Navbar /> }
      <h1>.אנגלית ברמה המתאימה לך</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/getting_better.jpg'
              text='לימוד מילים'
              label='לימוד'
              path='/learn'
            />
            <CardItem
              src='images/academ.jpg'
              text='לימוד ע"י משחק'
              label='משחק'
              path='/Services'
            />
            <CardItem
              src='images/academ.jpg'
              text='לימוד ע"י משחק'
              label='השלמת מילים'
              path='/Services'
            />
            <CardItem
              src='images/academ.jpg'
              text='לימוד ע"י משחק'
              label='מבחן'
              path='/Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
