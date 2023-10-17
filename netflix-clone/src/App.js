import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Top_Rated,Upcoming,Now_Playing,Popular } from './urls/url';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={Top_Rated} title={'Netflix Originals'} />
      <RowPost url={Now_Playing} title={'Action'} isSmall/>
      <RowPost url={Upcoming} title={'Upcoming'} isSmall/>
      <RowPost url={Popular} title={'Popular'} isSmall/>
    </div>
  );
}

export default App;
