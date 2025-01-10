import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ExplorePage from './pages/ExplorePage';
import InternationalPage from './pages/InternationalPage';

export default function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 dark:bg-gray-900">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/international" element={<InternationalPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}