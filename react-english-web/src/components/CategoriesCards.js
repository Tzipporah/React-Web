import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Navbar from './Navbar';
import Footer from './Footer'

function CategoriesCards({ match }) {

  const level = match.params.level;
  const mapLeveltoHebrew = {
    'spoken': 'אנגלית מדוברת - להבין את השפה ברחוב ',
    'business': ' אנגלית עיסקית - הצלחה בעסקים. מקצועיות',
    'advancers': 'מתקדמים - אנגלית למי שרוצה להשתפר',
    'students': 'תלמידים - חיים קלים באקדמיה',
    'beginners': 'מתחילים - להתחיל את האנגלית שלך פה'
  }
 
  return (
    <>
      <Navbar />
      <div className='cards'>
        <h1>{mapLeveltoHebrew[level]}</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='../images/learn_word2.jpg'
                text='לימוד מילים'
                label='לימוד'
                path={`/learn/${level}`}
              />
              <CardItem
                src='../images/game.jpg'
                text='לימוד ע"י משחק'
                label='משחק'
                path={`/game/${level}`}
              />
              <CardItem
                src='../images/Completion_sentences.jpg'
                text='לימוד ע"י סיפור'
                label='השלמת מילים'
                path={`/word_completion/${level}`}
              />
              <CardItem
                src='../images/exam.jpg'
                text='למדת - נבחנת -הצלחת'
                label='מבחן'
                path={`/Test/${level}`}
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CategoriesCards;
