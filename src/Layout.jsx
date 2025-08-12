import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col min-h-screen items-stretch">
      <div className="w-full">
        <Header />
      </div>
      <main className="w-full flex-1 mt-4">{children}</main>
      <div className="w-full mt-3">
        <Footer />
      </div>
    </div>
  );
}