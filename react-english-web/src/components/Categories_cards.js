import React from 'react';
import './Levels_cards.css';
import CardItem from './CardItem';
import Navbar from './Navbar';
import Footer from './Footer'

function Learning_cards({ match }) {

  const level = match.params.level;
 
  return (
    <>
      <Navbar />
      <div className='cards'>
        <h1>.אנגלית ברמה המתאימה לך</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='../images/getting_better.jpg'
                text='לימוד מילים'
                label='לימוד'
                path={`/learn/${level}`}
              />
              <CardItem
                src='../images/academ.jpg'
                text='לימוד ע"י משחק'
                label='משחק'
                path={`/Services/${level}`}
              />
              <CardItem
                src='../images/academ.jpg'
                text='לימוד ע"י סיפור'
                label='השלמת מילים'
                path={`/Services/${level}`}
              />
              <CardItem
                src='../images/academ.jpg'
                text='למדת - נבחנת -הצלחת'
                label='מבחן'
                path='/Test'
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Learning_cards;
