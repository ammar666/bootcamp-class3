import React from 'react';
import Child from './child.js';
div {text-align: center;}
function App() {
  return (
    <div >
      <h1>HELLO WORLD</h1>
      <Child dishname = "Karahi" Sweet = "Cake" />
      <hr />
      <Child dishname = "biryani" Sweet = "halwa" />
    </div>
  );
}

export default App;
