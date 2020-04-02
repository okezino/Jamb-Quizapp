import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./component/Home"
import instruc from "./component/instruc"
import play from "./component/play"
import summary from "./component/stat"


function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Home}/>
      <Route path="/play/instr" exact component={instruc}/>
      <Route path ="/play/quiz" exact component={play}/>
      <Route path ="/play/stat" exact component={summary}/>
      </div>
    </Router>
   
  
  );
}

export default App;
