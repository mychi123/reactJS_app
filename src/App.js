import './App.css';
import React, {Component} from "react";
import Shirt from './Components/Bai6';
import Bai7 from './Components/Bai7';
import Bai8 from './Components/Bai8';
import Bai9 from './Components/Bai9';

// import Templatestring from './Components/TempletString';
import NameList from './Components/Bai10';

function App() {
  const numbers = [1, 2, 3, 4, 5]; 
  const doubled = numbers.map((number) => number * 2);
  const name='chi'
  const temp= ` My name is ${name} `
  // const length = numbers.length
  return (
    <div className="App">
     <Shirt color="red" num="3.14" size="medium" />
     <br></br>
     <Bai7/>
     <br></br>
     <Bai8/>
     <br></br>
     <Bai9/>
     <br></br>
     <NameList/>
     <br></br>
      <h2 class= "temp">{temp}</h2>
    </div>
  );
}

export default App;
