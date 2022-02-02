import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Create a username'
        />
        <label>Email</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your email'
        />
        <label>Password</label>
        <input
          className='registerInput'
          type='password'
          placeholder='Create a password'
        />
        <button className='registerButton'>register</button>
      </form>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
