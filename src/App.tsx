import { useState } from 'react';
import './App.css';
import { ThemeContextProvider } from './contexts/theme-context';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { JokeCategories } from './pages/joke-categories';
import { JokePage } from './pages/joke-page';

function App() {

  return <BrowserRouter>
    <ThemeContextProvider>
      <ul>
        <li><Link to="/" >Categories</Link></li>
        <li><Link to="/categories/test" >Test</Link></li>
      </ul>
      <Routes>
        <Route index path="/" element={<JokeCategories />} />
        <Route path="/categories/:category" element={<JokePage />} />
      </Routes>
    </ThemeContextProvider>
  </BrowserRouter>
}

export default App;
