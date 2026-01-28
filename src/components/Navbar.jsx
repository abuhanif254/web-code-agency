/** @format */

import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className='navbar max-w-screen-2xl min-h-0 h-16 container mx-auto bg-white px-5'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex='-1'
              className='menu menu-sm dropdown-content bg-amber-50 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li>
                <a>Categories</a>
                <ul className='p-2'>
                  <li>
                    <Link to="/">Web Design</Link>
                  </li>
                  <li>
                    <Link to="/">App Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
          <Link to="/" className=' text-xl font-bold inline-flex items-center gap-2 whitespace-nowrap'>
          <img src="/logo.png" className="h-full max-h-12 object-contain" alt="logo" />
          <span>WebCode</span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className='p-2 bg-amber-50 w-40 z-1'>
                  <li>
                    <Link to="/">Web Design</Link>
                  </li>
                  <li>
                    <Link to="/">App Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                  
                </ul>
              </details>
            </li>
            
          </ul>
        </div>
        <div className='navbar-end space-x-4'>
          <Link to="/login" className='btn btn-outline btn-primary px-8 hidden sm:flex'>Log In</Link>
           <Link to="/pricing" className='btn btn-primary '>Start Free Trial</Link>
        </div>
      </div>
  );
};

export default Navbar;
