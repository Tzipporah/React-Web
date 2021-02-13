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
            <Button buttonStyle='btn--outline'>הירשם כמנוי</Button>
          </form>
          <p className='footer-subscription-text'>
          ניתן לבטל הרשמה בכל עת
          </p>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>עלינו</h2>
            <Link to='/sign-up'>איך זה עובד</Link>
            <Link to='/'>המלצות</Link>
            <Link to='/'>משקיעים</Link>
            <Link to='/'>תנאי שימוש</Link>
          </div>
          <div class='footer-link-items'>
            <h2>צרו איתנו קשר</h2>
            <Link to='/'>צרו קשר</Link>
            <Link to='/'>תמיכה</Link>
            <Link to='/'>שיתופי פעולה</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>רשתות חברתיות</h2>
            <Link to='/'>אינסטגרם</Link>
            <Link to='/'>פייסבוק</Link>
            <Link to='/'>יוטיוב</Link>
            <Link to='/'>טוויטר</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              אנגלית שלך
              <i class='fas fa-glasses' />
            </Link>
          </div>
          <small class='website-rights'>אנגלית שלך © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
