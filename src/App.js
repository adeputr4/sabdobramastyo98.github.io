import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu'
import MainRoute from './components/page/MainRoute'
import MyFooter from './components/MyFooter';

function App() {
  return (
      <div>
        <MainMenu/>
            <br/>
            <MainRoute/>
            <MyFooter/>
      </div>
  );
}

export default App;
