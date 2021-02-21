import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Navbar from './Navbar';

function Cards2() {

  return (
    <div className='cards'>
      {/* <Navbar 
        signOut={params.signOut}
        userName={params.userName}
        profilePicture={params.profilePicture}/> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/exam.jpg'
              text='מבחן על הנלמד'
              label='מבחן'
              path='/Services'
              
            />
            <CardItem
              src='images/game.jpg'
              text='לימוד ע"י משחק'
              label='משחק'
              path='/Services'
            />
            <CardItem
              src='images/Completion_sentences.jpg'
              text='לימוד ע"י השלמת מילים'
              label='השלמת מילים'
              path='/Word_completion'
            />
            <CardItem
              src='images/pexels-pixabay-278890.jpg'
              text='לימוד מילים'
              label='לימוד'
              path='/learn'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
