import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>.אנגלית ברמה המתאימה לך</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/getting_better.jpg'
              text='להתחיל את האנגלית שלך פה'
              label='מתחילים'
              path='/services'
            />
            <CardItem
              src='images/academ.jpg'
              text='חיים קלים באקדמיה'
              label='תלמידים'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          
            <CardItem
              src='/images/starting.jpg'
              text='אנגלית למי שרוצה להשתפר'
              label='מתקדמים'
              path='/services'
            />
            <CardItem
              src='images/business.jpg'
              text='הצלחה בעסקים. מקצועיות'
              label='אנגלית עיסקית'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='להבין את השפה ברחוב'
              label='אנגלית מדוברת'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
