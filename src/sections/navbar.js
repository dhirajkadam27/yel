import './navbar.css';

function Nav() {
  return (
  

        <div className='nav'>
          <div className='logo'>Yel AI</div>
          <div className='links'>
            <a href='/services'>Services</a>
            <a href='/industries'>Industires</a>
            <a href='/about'>About</a>
          </div>
          <div className='btns'>
            <button>Log in</button>
            <button>Book a Demo</button>
          </div>
          <div className='menu'>&#9776;</div>
        </div>

  );
}

export default Nav;
