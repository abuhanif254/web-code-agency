import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
         <Navbar />
         <main className='min-h-screen'>
           <Outlet />
         </main>
          <footer>Footer</footer  >
    </>
  );
};

export default App;