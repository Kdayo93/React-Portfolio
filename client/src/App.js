import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainRouter from './MainRouter';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRouter />
    </BrowserRouter>
  );
}

