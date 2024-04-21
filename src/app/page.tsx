import NavBar from '@/components/NavBar';
import Lan from '@/components/landing'; // Fixed import and component name
import React from 'react';

function HomePage() {
  return (
    <div className="">
      <NavBar />;
      <Lan /> {/* Fixed component name */}
    </div>
  );
}

export default HomePage;
