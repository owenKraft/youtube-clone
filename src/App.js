import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import NoticeBanner from './components/NoticeBanner';

function App() {
  return (
      <div>
          <NoticeBanner 
            text = "Hey! This is an HTML & CSS project only."
          />
          <Navbar />
          <Main />
      </div>
  );
}

export default App;
