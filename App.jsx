import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { useState } from 'react';
import { ThemeContext, ThemeProvider } from './Contexts/ThemeContext';

const App = () => {
   
  return (
    <ThemeProvider> 
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
