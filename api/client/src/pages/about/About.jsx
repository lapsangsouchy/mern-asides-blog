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
        <p>I'm a nerdy little software developer based in Brooklyn, NY! :)</p>
        <p>This was based on Lama Dev's MERN Blog tutorial on YouTube.</p>
        <p style={{ justifyContent: 'center' }}>
          I'm planning on creating a new one with more customization using
          Next.js and Ghost that I'll use with other collaborators.
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
