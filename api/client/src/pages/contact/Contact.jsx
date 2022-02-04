import React from 'react';

const Contact = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Contact</span>
        <img
          src='https://images.pexels.com/photos/10194721/pexels-photo-10194721.jpeg?cs=srgb&dl=pexels-aleksey-sokolenko-10194721.jpg&fm=jpg'
          alt=''
          style={{
            width: '70vw',
            height: '250px',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        />
        <h3 style={{ marginTop: '20px' }}>Email Me</h3>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>aleesmithnyc@gmail.com</span>
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

export default Contact;
