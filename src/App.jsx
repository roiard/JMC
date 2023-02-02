import './App.css';
import React, { useState, useEffect }  from 'react';
import Nav from './component/Nav';
import Header from './component/Header';
import Result from './component/Result';
import FilterButton from './component/FilterButton';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 660) {
        setSize([window.innerWidth, window.innerHeight]);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className={`bg-gray-200 min-h-screen h-screen items-center justify-center ${width < 660 ? 'sm:flex' : 'flex'}`}>
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
