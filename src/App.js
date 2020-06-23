import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./component/Home"
import instruc from "./component/instruc"
import play from "./component/play"
import summary from "./component/stat"
import Chemistry from "./component/subjectCall/chemistry"
import Biology from "./component/subjectCall/biology"
import Accounting from "./component/subjectCall/accounting"
import commerce from "./component/subjectCall/commerce"
import English from "./component/subjectCall/physics"
import Physics from "./component/subjectCall/physics"
import Mathematics from "./component/subjectCall/mathematics"
import Economics from "./component/subjectCall/Economics"

function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Home}/>
      <Route path="/play/instr" exact component={instruc}/>
      <Route path ="/play/quiz" exact component={play}/>
      <Route path ="/play/bio" exact component={Biology}/>
      <Route path ="/play/acc" exact component={Accounting}/>
      <Route path ="/play/com" exact component={commerce}/>
      <Route path ="/play/eng" exact component={English}/>
      <Route path ="/play/phy" exact component={Physics}/>
      <Route path ="/play/che" exact component={Chemistry}/>
      <Route path ="/play/eco" exact component={Economics}/>
      <Route path ="/play/stat" component={summary}/>
      <Route path ="/play/mth" component={Mathematics}/>
      </div>
    </Router>
   
  
  );
}

export default App;
