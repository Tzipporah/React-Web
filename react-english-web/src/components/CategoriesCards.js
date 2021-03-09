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

  const mapLevelToImage = {
    'spoken': {
      'learn' : '../images/spoken/pink talk.jpg',
      'game' : '../images/spoken/pink chess.jpg',
      'word_completion': '../images/spoken/pink think.jpeg',
      'Test' : '../images/spoken/pink light bolb.jpg'

    },
    'business': {
      'learn' : '../images/business/learn blue.jpg',
      'game' : '../images/business/blue chess.jpg',
      'word_completion': '../images/business/blue business building.jpeg',
      'Test' : '../images/business/light bolb blue.jpg'

    },
    'advancers': {
      'learn' : '../images/advancers/abc orange.jpg',
      'game' : '../images/advancers/palying cards.jpeg',
      'word_completion': '../images/advancers/sun in puzzle.jpeg',
      'Test' : '../images/advancers/question-mark-orange.jpg'

    },
    'students': {
      'learn' : '../images/students/pexels-magda-ehlers-1337387.jpg',
      'game' : '../images/students/Hangman_web-1024x682.jpg',
      'word_completion': '../images/students/pexels-pixabay-356079.jpg',
      'Test' : '../images/students/pexels-raka-miftah-4253621.jpg'

    },
    'beginners': {
      'learn' : '../images/beginners/learn begin.png',
      'game' : "../images/beginners/pexels-george-becker-136350.jpg",
      'word_completion': '../images/beginners/puzzle green.jpg',
      'Test' : '../images/beginners/brain green.jpeg'

    }
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
                src={mapLevelToImage[level]['learn']}
                text='לימוד מילים'
                label='לימוד'
                path={`/learn/${level}`}
              />
              <CardItem
                src={mapLevelToImage[level]['game']}
                text='לימוד ע"י משחק'
                label='משחק'
                path={`/game/${level}`}
              />
              <CardItem
                src={mapLevelToImage[level]['word_completion']}
                text='לימוד ע"י סיפור'
                label='השלמת מילים'
                path={`/word_completion/${level}`}
              />
              <CardItem
                src={mapLevelToImage[level]['Test']}
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
