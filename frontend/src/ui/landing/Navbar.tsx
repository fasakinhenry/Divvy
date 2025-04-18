import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-[#FFE8E8] py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='text-2xl font-medium'>Divvy</div>

          {/* Desktop Navigation and Buttons */}
          <div className='hidden md:flex items-center justify-between flex-1 ml-8'>
            <nav className='flex items-center space-x-8'>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                Home Page
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                About us
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                Contact Us
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                More Links
              </a>
            </nav>

            <div className='flex items-center space-x-4 ml-auto'>
              <a href='/auth'>
                <Button className='border-2 border-gray-300 text-black bg-transparent rounded-full px-6 transition duration-300 hover:bg-gray-200 cursor-pointer'>
                  Join
                </Button>
              </a>
              <a href='/auth/register'>
                <Button className='bg-[#FF8E8E] text-white rounded-full px-6 transition duration-300 hover:bg-[#FF7070] hover:shadow-lg cursor-pointer'>
                  Sign Up
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-700'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='3' y1='12' x2='21' y2='12'></line>
                <line x1='3' y1='6' x2='21' y2='6'></line>
                <line x1='3' y1='18' x2='21' y2='18'></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4'>
            <nav className='flex flex-col space-y-4'>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                Home Page
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                About us
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                Contact Us
              </a>
              <a href='#' className='text-black hover:text-gray-500 transition duration-300 cursor-pointer font-sarabun'>
                More Links
              </a>
              <a href='/auth'>
                <Button className='border border-gray-300 text-black bg-transparent rounded-full w-full transition duration-300 hover:bg-gray-200 cursor-pointer'>
                  Join
                </Button>
              </a>
              <a href='/auth/register'>
                <Button className='bg-[#FF8E8E] text-white rounded-full w-full transition duration-300 hover:bg-[#FF7070] hover:shadow-lg cursor-pointer'>
                  Sign Up
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;