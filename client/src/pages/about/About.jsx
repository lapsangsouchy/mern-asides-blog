import React from 'react';

const About = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
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
        <p>I'm a software developer based in Brooklyn, NY! :)</p>
        <p style={{ justifyContent: 'center' }}>
          This was my first attempt at building a blog that could be used by
          multiple collaborators.
        </p>
        <p>But until then, enjoy my occasional musings here!</p>
      </div>

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

export default About;
