import React, { Children } from 'react';
import Navbar from './Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
