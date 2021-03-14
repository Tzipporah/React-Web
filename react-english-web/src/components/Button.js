import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

// Determines a consistent pattern to design each button
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const button = <button
    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>

  return (
    <>
    {linkTo===undefined
    ?
      button
    :
      <Link to={linkTo} className='btn-mobile'>
        {button}
      </Link>}
    </>
  );
};
