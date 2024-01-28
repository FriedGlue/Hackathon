import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BsX } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    // Handle body styles when the menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href;
  }

  return (
    <header>
      {/* Navbar for laptops */}
      <nav className='lg:flex fixed hidden w-full h-16 bg-[#A63B3B]'>
        <div className='flex items-center justify-between px-4 h-full w-full'>
          <Link to='/' className='pl-10'>
            <AiOutlineHome className='h-6 w-6' /> {/* Home icon */}
          </Link>
          <div className='pr-12 ml-auto'>
            <ul className='flex font-semibold space-x-4'>
              <li className='py-4 text-black hover:underline hover:font-medium'>
                <Link to='/search'>Search</Link>
              </li>
              <li className='py-4 text-black hover:underline hover:font-medium'>
                <Link to='/trending-items'>Popular Items</Link>
              </li>
              <li className='py-4 text-black hover:underline hover:font-medium'>
                <Link to='/recent-searches'>Your past orders</Link>
              </li>
              <li className='py-4 text-black hover:underline hover:font-medium'>
                <Link to='/how-it-works'>Goals</Link>
              </li>
              {isAuthenticated && (
                <li className='py-4 text-black hover:underline hover:font-medium'>
                  <Link to='/personalized-home'>Personalized Home</Link>
                </li>
              )}
              <li className='py-4 text-black hover:underline hover:font-medium'>
                <Link to='/' onClick={handleSignOut}>Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Toggle menu for mobile */}
      <nav className='lg:hidden fixed w-full h-16 bg-[#A63B3B]'>
        <div className="flex items-center justify-between px-4 h-full w-full">
          <div className='pl-12'>
            <FiMenu onClick={toggleMenu} className='cursor-pointer h-6 w-6 text-black'></FiMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={
        menuOpen
          ? 'fixed top-0 left-0 w-2/3 lg:w-1/3 md:w-1/3 h-screen p-5 lg:p-10 md:p-10 ease-in-out duration-500 bg-[#A63B3B] z-40'
          : 'fixed left-[-100%] top-0 p-10'
      }>
        <div className='flex w-full items-center justify-end'>
          <div>
            <BsX onClick={toggleMenu} className='cursor-pointer h-6 w-6 text-black'></BsX>
          </div>
        </div>
        <div className='flex-col py-8 px-10 lg:py-4 lg:px-16 text-xl whitespace-nowrap'>
          <ul>
            <li onClick={() => setMenuOpen(false)} className='py-4 text-black hover:underline'>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className='py-4 text-black hover:underline'>
              <Link to="/search">Search</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className='py-4 text-black hover:underline'>
              <Link to="/recent-searches">Your past orders</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className='py-4 text-black hover:underline'>
              <Link to="/how-it-works">Goals</Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className='flex items-center py-4 hover:underline'>
              <button className='border bg-slate-300 py-3 px-8 whitespace-nowrap items-center justify-center rounded-full hover:bg-yellow-600 text-black'>
                <Link to="/sign-in">Sign Out</Link>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-black flex flex-row justify-center whitespace-nowrap items-center pt-10 text-2xl lg:text-3xl font-extralight'>
            <Link to='/' onClick={() => setMenuOpen(false)}>Plateful</Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
