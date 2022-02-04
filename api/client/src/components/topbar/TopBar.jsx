import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const PF = 'https://asidesblogbeta.herokuapp.com/images/';

  return (
    <div className='top'>
      <div className='topLeft'>
        <a className='link' href='https://github.com/lapsangsouchy'>
          <i className='topIcon fab fa-github-square'></i>
        </a>
        <a
          className='link'
          href='https://www.linkedin.com/in/alexander-smith-bklyn/'
        >
          <i className='topIcon fab fa-linkedin-in'></i>
        </a>
        <a className='link' href='https://www.instagram.com/aleesmithnyc/'>
          <i className='topIcon fab fa-instagram-square'></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            {user && (
              <Link className='link' to='/write'>
                WRITE
              </Link>
            )}
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img className='topImg' src={PF + user.profilePicture} alt='NASA' />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
