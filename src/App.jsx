import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import Result from './component/Result';
import FilterButton from './component/FilterButton';


function App() {

  return (
    <div>
      <Nav/>
      <Header />
      <Result/>
      <FilterButton/>
    </div>
  );
}

export default App;
