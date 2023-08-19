import React from 'react';
import NavBar from './Components/NavBar/NavBar';

import {action,orginals,Horror,Romance} from './urls'

import './App.css';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url ={orginals} title ='Netflix Orginals'/>
      <Rowpost url ={action} title ='Actions'  isSmall/>
      <Rowpost url ={Horror} title ='Horror'  isSmall/>
      <Rowpost url ={Romance} title ='Romance'  isSmall/>

      

    
    </div>
  );
}

export default App;
