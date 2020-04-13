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
        fiftyfity : (state.numberOfquest - (state.correctAnswer + state.wrongAnswer))
        
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
               remark ="Excellent"
           }       
        return ( <Fragment>
            <Helmet><title>player statistics</title></Helmet>
             <div className="head">
             
                
                <h1>Quiz Completed</h1>

            <div className="stats">

                <h4>{remark}</h4>
                <h2> Score obtain in quiz : {this.state.score.toFixed(0)}%  </h2>
                 <table>
                 <tr>
                <th> SUMMARY</th>
                <th> SCORE</th>
                </tr>
                <tr>
                <td> Number of question</td>
                <td> {this.state.numberOfquest}</td>
                </tr>
                     <tr>
                <td> Answered question</td>
                <td> {this.state.numberOfAnsweredquest}</td>
                </tr>
                <tr>
                <td> Unanswered question</td>
                <td> {this.state.fiftyfity}</td>
                </tr>
                <tr>
                <td> Number of correctAnswer</td>
                <td> {this.state.correctAnswer}</td>
                </tr>
                <tr>
                <td> Number of wrongAnswer</td>
                <td> {this.state.wrongAnswer}</td>
                </tr>
                <tr>
                <td> Number of hint unused </td>
                <td> {this.state.hint}</td>
                </tr>
               
                </table>
                <div className="pagebutton">
             <button   onClick={this.buttonhandlerr}>Replay</button>
             <button   onClick={this.buttonhandlerq}>Quit</button>
         </div>
            </div>
              </div>
              </Fragment>

         );
    }
}
 
export default withRouter(summary);