import React from 'react';
import './Category_cards.css';
import CardItem from './CardItem';
import Navbar from './Navbar';

function Learning_cards() {

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
              path='/Test'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Learning_cards;
