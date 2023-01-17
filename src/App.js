import './App.css';
import React from 'react';
import ProfilPhoto from './components/Profile/ProfilPhoto';
import FullName from './components/Profile/FullName';
import Adress from './components/Profile/Adress';



function App() {
  return (
    <div className="App">
    <FullName/>
    <Adress/>
    <ProfilPhoto/>
    </div>
  );
}

export default App;
