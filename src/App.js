
import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const catagoryContext = createContext();

function App() {
  const [count, setCount] = useState('laptop');
  return (
    <catagoryContext.Provider value={[count, setCount]}>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </catagoryContext.Provider>
  );
}

export default App;
