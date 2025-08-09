import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex min-w-full flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </div>
  );
}