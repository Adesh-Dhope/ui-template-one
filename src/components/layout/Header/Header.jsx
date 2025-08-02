import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../Logout/Logout';

const Header = () => {
  const { title } = useSelector((state) => state.pageTitle);

  return (
<header className="bg-orange-500 w-full p-1 md:px-4 md:py-3 shadow-md rounded-md">
  <div className="flex items-center justify-between">
    <h1 className="text-white text-lg sm:text-lg md:text-xl font-semibold">
      {title}
    </h1>
    <div className='pr-0 md:pr-5'>
      <Logout />
    </div>
  </div>
</header>

  );
};

export default Header;
