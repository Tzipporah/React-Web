import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LevelsCards() {
  return (
    <div className='cards' style={{direction: "rtl"}}>
      <h1>.אנגלית ברמה המתאימה לך</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/getting_better.jpg'
              text='להתחיל את האנגלית שלך פה'
              label='מתחילים'
              path='/categories-cards/beginners'
            />
            <CardItem
              src='images/academ.jpg'
              text='חיים קלים באקדמיה'
              label='תלמידים'
              path='/categories-cards/students'
            />
          </ul>
          <ul className='cards__items'>

            <CardItem
              src='/images/starting.jpg'
              text='אנגלית למי שרוצה להשתפר'
              label='מתקדמים'
              path='/categories-cards/advancers'
            />
            <CardItem
              src='images/business.jpg'
              text='הצלחה בעסקים. מקצועיות'
              label='אנגלית עיסקית'
              path='/categories-cards/business'
            />
            <CardItem
              src='images/img-6.jpg'
              text='להבין את השפה ברחוב'
              label='אנגלית מדוברת'
              path='/categories-cards/spoken'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LevelsCards;
