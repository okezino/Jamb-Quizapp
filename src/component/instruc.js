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
                     <div className="col-sm-3 sub p-3">
                     <Link to="/play/phy">    <span >  PHYSICS </span>
                        <span className="right">  + </span></Link>
                        </div> 
                    <div className="col-sm-3 sub p-3">
                    <Link to="/play/che"> <span >  CHEMISTRY</span>
                        <span className="right">  + </span> </Link>
                        </div> 
                        
                   <div className="col-sm-3 sub p-3">
                   <Link to="/play/bio">    <span > BIOLOGY </span>
                        <span className="right"> + </span></Link>
                        </div>
                    </div>
                    <div className = "row d-flex justify-content-around ">
                     <div className="col-sm-3 sub p-3">
                     <Link to="/play/com">  <span >COMMERCE </span>
                        <span className="right">  + </span></Link>
                        </div>
                     <div className="col-sm-3 sub p-3">
                     <Link to="/play/mth">    <span >  MATHEMATICS </span>
                        <span className="right">  + </span></Link>
                        </div>
                        
                          <div className="col-sm-3 sub p-3">
                          <Link to="/play/eng">    <span >  ENGLISH </span>
                        <span className="right">  + </span></Link>
                        </div>
                    </div>
                    <div className = "row d-flex justify-content-around ">

                   <div className="col-sm-3 sub p-3">
                   <Link to="/play/acc">    <span > ACCOUNTING </span>
                        <span className="right">  +</span></Link>
                        </div>

                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> CURRENT AFFAIRS </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        
                       <div className="col-sm-3 sub p-3">
                       <Link to="/play/eco">  <span >  ECONOMICS </span>
                        <span className="right">  + </span></Link>
                        </div>
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
