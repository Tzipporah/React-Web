import React from 'react';
import '../App.css';
import './CategorySection.css';

function CategorySection(props) {
  // Determines a consistent pattern to design each category
  return (
    <div className='category-container'>
      <video src={props.videoLink} autoPlay loop muted /> 
      <h3>{props.title}</h3>
      <div className='category-btns'>
          {props.children}
      </div>
    </div>
  );
}

export default CategorySection;
