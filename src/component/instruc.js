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

                    <h1>How to Play the Game </h1>
                    <p>Ensure you read the guide before playing the Game</p>
                    <ul>
                        <li>
                            Answer the correct question by clicking on the Answer
                           
                        </li>
                        <li>
                    
                            <img src={sample} alt="picture is suppose to be here"/>
                        </li>
                        
                        <li>
                            You can use the Hint options to eliminate wrong Answers
                            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                            5 hints available
                           
                        </li>
                        <li>
                            Click submit when you are done, you have about 3 SECONDS to answer the question
                            <span className="mdi mdi-lightbulb mdi-24px lifeline-icon"></span>
                            Display image
                           
                        </li>
                        
                    </ul>

                    <div>
                        <span className="left"> <Link to ="/"> BACK </Link></span>
                        <span className="right"> <Link to="/play/quiz"> START GAME </Link></span>
                    </div>

                </div>
            </Fragment>
         );
    }
}
 
export default instruc;
