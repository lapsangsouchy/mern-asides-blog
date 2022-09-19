// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  //Category featured commented until solution is found

  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get('/categories');
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          <Link className='link' to='/about'>
            About Me
          </Link>
        </span>

        <img
          src='https://images.pexels.com/photos/10194721/pexels-photo-10194721.jpeg?cs=srgb&dl=pexels-aleksey-sokolenko-10194721.jpg&fm=jpg'
          alt=''
        />
        <p>
          This is an application built with the MERN Stack! Check out my post on
          how I made this!
        </p>
      </div>
      {/* <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Me!</span>
        <div className='sidebarSocial'>
          <a className='link' href='https://github.com/lapsangsouchy'>
            <i className='sidebarIcon fab fa-github-square'></i>
          </a>
          <a
            className='link'
            href='https://www.linkedin.com/in/alexander-smith-bklyn/'
          >
            <i className='sidebarIcon fab fa-linkedin-in'></i>
          </a>
          <a className='link' href='https://www.instagram.com/aleesmithnyc/'>
            <i className='sidebarIcon fab fa-instagram-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
