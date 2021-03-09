import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'
import Avatar from 'antd/lib/avatar'
import 'antd/lib/avatar/style/index.css';


function Navbar(props) {

  const { user } = props
  const userName = user.displayName
  const profilePicture = user.photoURL

  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  }

  const closeMobileMenuAndSignOut = () => {
    closeMobileMenu();
    props.signOut();
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Avatar size={40} icon={userName} src={profilePicture}/>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {userName}
            <i className='fas fa-glasses' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/personal-info' className='nav-links' onClick={closeMobileMenu}>
                איזור אישי
              </Link>
            </li>
          <li className='nav-item'>
              <Link to='/categories-cards/spoken' className='nav-links' onClick={closeMobileMenu}>
                אנגלית מדוברת
              </Link>
            </li>
          <li className='nav-item'>
              <Link to='/categories-cards/business' className='nav-links' onClick={closeMobileMenu}>
                אנגלית עסקית
              </Link>
            </li>
          <li className='nav-item'>
            <Link to='/categories-cards/advancers' className='nav-links' onClick={closeMobileMenu}>
                מתקדמים
              </Link>
            </li>
          <li className='nav-item'>
              <Link to='/categories-cards/students' className='nav-links' onClick={closeMobileMenu}>
                תלמידים
              </Link>
            </li> 
          <li className='nav-item'>
              <Link to='/categories-cards/beginners' className='nav-links' onClick={closeMobileMenu}>
                מתחילים
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/main-page' className='nav-links' onClick={closeMobileMenu}>
                בית
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenuAndSignOut}
              >
                התנתקות
              </Link>
            </li>
            </ul>
            <li>
          {button && <Button buttonStyle='btn--outline' onClick={props.signOut} linkTo='/sign-up'>התנתקות</Button>}
          </li>
          
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
