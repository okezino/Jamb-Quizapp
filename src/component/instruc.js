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
                            i want to learn how to add an image before we move on
                           
                        </li>
                        <li>
                    
                            <img src={sample} alt="what da fuck"/>
                        </li>
                        
                        <li>
                            i want to learn how to add an image before we move on
                            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                            things will change 
                           
                        </li>
                        <li>
                            i want to learn how to add an image before we move on
                            <span className="mdi mdi-lightbulb mdi-24px lifeline-icon"></span>
                            things will change 
                           
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
