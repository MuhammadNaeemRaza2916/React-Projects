import React from 'react';
import { Header, HeaderPart, Hr, Navbaar } from '../components';

function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      <Hr />
      <HeaderPart />
      <Navbaar />
    </div>
  );
}

export default HomePage;
