import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./component/Home"
import instruc from "./component/instruc"
import play from "./component/play"
import summary from "./component/stat"
import Chemistry from "./component/subjectCall/chemistry"
import Biology from "./component/subjectCall/biology"
import Physics from "./component/subjectCall/physics"


function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Home}/>
      <Route path="/play/instr" exact component={instruc}/>
      <Route path ="/play/quiz" exact component={play}/>
      <Route path ="/play/bio" exact component={Biology}/>
      <Route path ="/play/phy" exact component={Physics}/>
      <Route path ="/play/che" exact component={Chemistry}/>
      <Route path ="/play/stat" component={summary}/>
      <Route path ="/play/chem" component={Chemistry}/>
      </div>
    </Router>
   
  
  );
}

export default App;
