import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='המייל שלך פה'
            />
            <Button buttonStyle='btn--outline' linkTo='/'>הירשם כמנוי</Button>
          </form>
          <p className='footer-subscription-text'>
          ניתן לבטל הרשמה בכל עת
          </p>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>עלינו</h2>
            <Link to='/sign-up'>איך זה עובד</Link>
            <Link to='/'>המלצות</Link>
            <Link to='/'>משקיעים</Link>
            <Link to='/'>תנאי שימוש</Link>
          </div>
          <div className='footer-link-items'>
            <h2>צרו איתנו קשר</h2>
            <Link to='/'>צרו קשר</Link>
            <Link to='/'>תמיכה</Link>
            <Link to='/'>שיתופי פעולה</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>רשתות חברתיות</h2>
            <Link to='/'>אינסטגרם</Link>
            <Link to='/'>פייסבוק</Link>
            <Link to='/'>יוטיוב</Link>
            <Link to='/'>טוויטר</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              אנגלית שלך
              <i className='fas fa-glasses' />
            </Link>
          </div>
          <small className='website-rights'>אנגלית שלך © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
