import React from 'react';
import './Levels_cards.css';
import CardItem from './CardItem';

function Category_cards() {
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
              path='/Categories_cards/beginners'
            />
            <CardItem
              src='images/academ.jpg'
              text='חיים קלים באקדמיה'
              label='תלמידים'
              path='/Categories_cards/students'
            />
          </ul>
          <ul className='cards__items'>

            <CardItem
              src='/images/starting.jpg'
              text='אנגלית למי שרוצה להשתפר'
              label='מתקדמים'
              path='/Categories_cards/advancers'
            />
            <CardItem
              src='images/business.jpg'
              text='הצלחה בעסקים. מקצועיות'
              label='אנגלית עיסקית'
              path='/Categories_cards/business'
            />
            <CardItem
              src='images/img-6.jpg'
              text='להבין את השפה ברחוב'
              label='אנגלית מדוברת'
              path='/Categories_cards/spoken'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category_cards;
