import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  // This represents a single card, it contains a figure, and text.
  return (
    <>
      <li className='cards__item'>
        <Link  
          className='cards__item__link' 
          to={props.path}
          >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Category'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 className='cards__item__text'>{props.text}</h1>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
