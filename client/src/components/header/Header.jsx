import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src='https://images.pexels.com/photos/6759350/pexels-photo-6759350.jpeg?cs=srgb&dl=pexels-dih-andr%C3%A9a-6759350.jpg&fm=jpg'
        alt='NASA'
        className='headerImg'
      />
    </div>
  );
};

export default Header;
