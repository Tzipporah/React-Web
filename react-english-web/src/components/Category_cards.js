import React from 'react';
import './Category_cards.css';
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
              path='/Learning_cards'
            />
            <CardItem
              src='images/academ.jpg'
              text='חיים קלים באקדמיה'
              label='תלמידים'
              path='/Learning_cards'
            />
          </ul>
          <ul className='cards__items'>

            <CardItem
              src='/images/starting.jpg'
              text='אנגלית למי שרוצה להשתפר'
              label='מתקדמים'
              path='/Learning_cards'
            />
            <CardItem
              src='images/business.jpg'
              text='הצלחה בעסקים. מקצועיות'
              label='אנגלית עיסקית'
              path='/Learning_cards'
            />
            <CardItem
              src='images/img-6.jpg'
              text='להבין את השפה ברחוב'
              label='אנגלית מדוברת'
              path='/Learning_cards'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category_cards;
