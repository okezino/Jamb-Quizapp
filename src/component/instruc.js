import React, { Component,Fragment } from 'react';
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"


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
                          <p> Click on the <span style={{fontWeight:"bold",fontStyle:"italic"}} >the subject </span> link below  to take the  quiz
                            </p>
                           
                        </li>
                        
                    </ol>

                    <div className = "row d-flex justify-content-around mt-5 ">
                    <Link to="/play/phy">   <div className="col-sm-3 sub p-3">
                        <span >  PHYSICS </span>
                        <span className="right">  + </span>
                        </div> </Link>
                    <Link to="/play/che"> <div className="col-sm-3 sub p-3">
                        <span >  CHEMISTRY</span>
                        <span className="right">  + </span>
                        </div>  </Link>
                        
                     <Link to="/play/bio">   <div className="col-sm-3 sub p-3">
                       <span > BIOLOGY </span>
                        <span className="right"> + </span>
                        </div></Link>
                    </div>
                    <div className = "row d-flex justify-content-around ">
                    <Link to="/play/com"> <div className="col-sm-3 sub p-3">
                        <span >COMMERCE </span>
                        <span className="right">  + </span>
                        </div></Link>
                    <Link to="/play/mth">    <div className="col-sm-3 sub p-3">
                        <span >  MATHEMATICS </span>
                        <span className="right">  + </span>
                        </div></Link>
                        
                    <Link to="/play/eng">        <div className="col-sm-3 sub p-3">
                        <span >  ENGLISH </span>
                        <span className="right">  + </span>
                        </div></Link>
                    </div>
                    <div className = "row d-flex justify-content-around ">

                    <Link to="/play/quiz">  <div className="col-sm-3 sub p-3">
                        <span > ACCOUNTING </span>
                        <span className="right">  +</span>
                        </div></Link>

                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> CURRENT AFFAIRS </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        
                    <Link to="/play/quiz">   <div className="col-sm-3 sub p-3">
                        <span >  VERBAL </span>
                        <span className="right">  + </span>
                        </div></Link>
                    </div>
                    <div className="bg-dark d-flex justify-content-center">
                        <span> <Link to ="/play/Bio" style={{color:"white"}}> BACK </Link></span>
                        
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default instruc;
