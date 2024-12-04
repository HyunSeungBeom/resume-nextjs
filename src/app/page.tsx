import React from 'react';
import { Header } from './Components/Header';
import { Body } from './Components/Body';

export default function Page() {
  return (
    <div className="w-full h-full py-20 px-52 font-sans ">
      <Header />
      <Body />
    </div>
  );
}
