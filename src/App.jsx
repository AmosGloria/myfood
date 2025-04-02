import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/home';

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
