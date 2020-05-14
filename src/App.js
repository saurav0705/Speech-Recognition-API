import React, { useState } from 'react';
import './App.scss';
import Tiles from './components/Tiles';

function App() {
  const [style,setStyle] = useState({id:0});
  
  return (
    <div className="App" style={style}>
      <div className="heading" style={style}>
        Say a tile name
        {style.id !==0 ? <div className="selected-tile"> Selected Tile  {style.id}</div>:null}
      </div>
      
      <Tiles
      change={(obj) => setStyle({...obj})}
      style = {style}
      />
      </div>
      
      
    
  );
}

export default App;
