import React, { Component,Fragment } from 'react';
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import {sample} from "../assets/img/sample.jpeg"

class instruc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
              <Helmet><title>Game instuctions</title></Helmet>
                <div className="instruction container">

                    <p className="h1">How to Play the Game </p>
                    <h6>Ensure you read the guide before playing the Game</h6>
                    <ol>
                        <li>
                            <p> Answer the correct question by clicking on the Answer </p>
                           
                        </li>
                        <li>
                           <p> You have 5 hints to eliminate wrong Answers, the hint can be use more than once per question
                            <span style={{color:"green"}} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span></p>
                            
                           
                        </li>
                        <li>
                          <p> After 3 minute the sytem automatically sumbit your answer and display your result imediately 
                            <span style={{color:"green"}} className="mdi mdi-lightbulb mdi-24px lifeline-icon"></span></p>
                           
                        </li>
                        <li>
                          <p> Click on the <span style={{fontWeight:"bold",fontStyle:"italic"}} >START GAME </span> link below  to take the quiz
                            </p>
                           
                        </li>
                        
                    </ol>

                    <div>
                        <span className="left"> <Link to ="/" style={{color:"green"}}> BACK </Link></span>
                        <span className="right"> <Link to="/play/quiz" style={{color:"green"}}> START GAME </Link></span>
                    </div>

                </div>
            </Fragment>
         );
    }
}
 
export default instruc;
