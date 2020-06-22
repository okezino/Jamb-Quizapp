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

                    <div className = "row d-flex justify-content-around ">
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/phy"> PHYSICS </Link></span>
                        <span className="right"> <Link to="/play/phy"> + </Link></span>
                        </div>
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/che"> CHEMISTRY </Link></span>
                        <span className="right"> <Link to="/play/che"> + </Link></span>
                        </div>
                        
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/bio"> BIOLOGY </Link></span>
                        <span className="right"> <Link to="/play/bio"> + </Link></span>
                        </div>
                    </div>
                    <div className = "row d-flex justify-content-around ">
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> COMMERCE </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> MATHEMATICS </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> ENGLISH </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                    </div>
                    <div className = "row d-flex justify-content-around ">
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> ACCOUNTING </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> CURRENT AFFAIRS </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
                        </div>
                        
                        <div className="col-sm-3 sub p-3">
                        <span > <Link to="/play/quiz"> VERBAL </Link></span>
                        <span className="right"> <Link to="/play/quiz"> + </Link></span>
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
