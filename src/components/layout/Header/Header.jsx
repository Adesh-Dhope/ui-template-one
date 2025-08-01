import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { title } = useSelector((state) => state.pageTitle);

  return (
<header className="bg-orange-500 w-full px-4 py-3 shadow-md">
  <div className="flex items-center justify-between">
    <h1 className="text-white text-lg sm:text-lg md:text-xl font-semibold">
      {title}
    </h1>
  </div>
</header>

  );
};

export default Header;
