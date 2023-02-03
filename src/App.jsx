import './App.css';
import React, { useState, useEffect }  from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import Result from './component/Result';
import FilterButton from './component/FilterButton';

function App() {

  return (
    <div className={`bg-gray-200 min-h-screen h-screen flex flex-col items-center justify-center`}>
      <div className="bg-white p-5 h-full">
        <Nav/>
        <Header />
        <Result/>
        <FilterButton/>
      </div>
    </div>
  );
}

export default App;
