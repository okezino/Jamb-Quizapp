import React, { Component,Fragment } from 'react';
import { Helmet } from "react-helmet"
import {Link, withRouter}  from "react-router-dom"

class summary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
             score : 0,
             numberOfAnsweredquest : 0,
             numberOfquest :0,
             correctAnswer : 0,
             wrongAnswer : 0,
             hint: 5,
             fiftyfity:2,
        
         }
    }
  componentDidMount(){
    let {state}= this.props.location
    this.setState({
        
        correctAnswer : state.correctAnswer,
        wrongAnswer : state.wrongAnswer,
        score : (state.correctAnswer / state.numberOfquest) * 100,
        numberOfquest : state.numberOfquest,
        numberOfAnsweredquest: 15 - state.numberOfunansweredquest,
        hint : state.hintused,
        fiftyfity : state.fiftyfityused,
        
    })
  }
  
  

 buttonhandlerr=()=>{
    this.props.history.push('/play/quiz');
 }
 buttonhandlerq=()=>{   
     console.log('i am here 0ooooo')      
          this.props.history.push('/');
     }
    render() { 
        let remark;
           if(this.state.score <= 30){
               remark= "You have done Poorly"
           }else if (this.state.score <= 50) {
                    remark= "This is fair"
           } else if (this.state.score <=70){
                remark ="You are Good"
           }else{
               remark ="You need an Award"
           }       
        return ( <Fragment>
            <Helmet><title>player statistics</title></Helmet>
             <div className="head">
             <Fragment>
                
                <h1>Quiz has Ended!!!</h1>

            <div className="container stats">

                <h4>{remark}</h4>
                <h2> Score obtain in quiz : {this.state.score.toFixed(0)}%  </h2>
            
                <span className=" stat left"> Total of answered question :</span>
                <span className="right">{this.state.numberOfAnsweredquest} :</span> < br />

                <span className="stat left"> Total number of question :</span>
                <span className="right">{this.state.numberOfquest} :</span> < br />

                <span className="stat left"> Total number of correctAnswer:</span>
                <span className="right">{this.state.correctAnswer} :</span> < br />

                <span className="stat left"> Total number of wrongAnswer :</span>
                <span className="right">{this.state.wrongAnswer} :</span> < br />

                <span className="stat left"> Total number of hint left :</span>
                <span className="right">{this.state.hint} :</span> < br />

                <span className="stat left"> Total number of fiftyfity left :</span>
                <span className="right">{this.state.fiftyfity} :</span> < br />

                <div className="pagebutton">
             <button className="first-child" id="Replay" onClick={this.buttonhandlerr}>Replay</button>
             <button id="quit"  onClick={this.buttonhandlerq}>Quit</button>
         </div>
            </div>
         

      </Fragment>
              </div>
              </Fragment>

         );
    }
}
 
export default withRouter(summary);