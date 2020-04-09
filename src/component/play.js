import React, { Component,Fragment } from 'react';
import quest from "./questions";
import isEmpty from "../utilities/is-empty";
import M from "materialize-css";
import shuffle from "../controller/aut"


class play extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            quest : shuffle(quest),
            currentquest : '',
            nextquest : {},
            prevquest :{},
            currentquestindex : 0,
           answer : " ",
            score : 0,
            totalquest : 15,
            numberOfAnsweredquest : 0,
            numberOfunansweredquest : 0,
            numberOfquest :0,
            correctAnswer : 0,
            wrongAnswer : 0,
            hint: 5,
            fiftyfity:2,
            usedfifty: false,
            IndexOfHints : [],
             IndexOfrand : [],
             time : {}
            

         }
         this.interval = null
    }


     componentDidMount(){
         let {quest} = this.state;
         this.setquest(quest)
         this.starttimer()
     }

    //  componentWillUnmount(){
    //      clearInterval(this.interval)
    //  }
   setquest = (quest) => {
           let{currentquestindex} = this.state
              if(!isEmpty(this.state.quest)){
                  quest = this.state.quest;
                 const  currentquest = quest[currentquestindex];
                 const  nextquest = quest[currentquestindex + 1];
                 const  prevquest = quest[currentquestindex -1];
                 const  answer = currentquest.answer;
                 const numberOfquest = quest.length

                  this.setState({
                      currentquest,
                      nextquest,
                      prevquest,
                      answer,
                      numberOfquest,
                      usedfifty : false,
                      IndexOfHints : [],
                      IndexOfrand : []
                  },()=>{this.showquest()})
              }

    }
    buttonhandlerp = () =>{
       if(this.state.prevquest !== undefined){
       this.setState(prevState=>({
           currentquestindex : prevState.currentquestindex -1,
           numberOfAnsweredquest : prevState.numberOfAnsweredquest -1,   
    }),() =>{
        let {quest} = this.state;
     this.setquest(quest)
    })
}
    }
     showquest=()=>{
         let option = Array.from(document.querySelectorAll(".options"))
             option.forEach((options)=>{
                 options.style.visibility="visible"
             })
       
     }
     buttonhandlern = () =>{
        if(this.state.nextquest !== undefined){
                  this.setState(prevState=>({
                          currentquestindex : prevState.currentquestindex + 1,
                          numberOfunansweredquest : prevState.numberOfunansweredquest +1,   
                 }),() =>{
                              let {quest} = this.state;
                              this.setquest(quest)
                          })
         }
     
     }

     buttonhandler = (e)=>{
        switch(e.target.id){

            case "prev":
               this.buttonhandlerp()
               break;
            case "next":
            this.buttonhandlern()
            break;
            case "quit":
                this.buttonhandlerq()
                break;
            default:
                break
        }
     }
     buttonhandlerq=()=>{   
          this.props.history.push('/');
     }
    handleOption=(e)=> { 
      if(e.target.innerHTML.trim() === this.state.answer.trim()){
    
          this.correctAns()
      }else{
        
          this.wrongAns()
        
      }
    }
    correctAns=()=> { 
         M.toast({
             html: " WoW..You re Correct",
             displayLength: 2000,
             classes:"toast-valid"
             
         })
         if(this.state.nextquest !== undefined){
            this.setState(prevState=>({
                    currentquestindex : prevState.currentquestindex + 1,
                    correctAnswer : prevState.correctAnswer + 1,
                    score : prevState.score + 1,
                   numberOfAnsweredquest : prevState.numberOfAnsweredquest +1,   
           }),() =>{
                        let {quest} = this.state;
                        this.setquest(quest)
                    })
   }else{
    this.setState(prevState=>({
        correctAnswer : prevState.correctAnswer + 1,
        score : prevState.score + 1,
       numberOfAnsweredquest : prevState.numberOfAnsweredquest +1,   
}),() =>{
    this.endgame()
        })
     
   }

        }
        wrongAns=()=> { 
            M.toast({
                html: " lol you re wrong",
                displayLength: 2000,
                classes:"toast-invalid"
                
            })
         
           if(this.state.nextquest !== undefined){
               this.setState(prevState=>({
                currentquestindex : prevState.currentquestindex + 1,
                wrongAnswer : prevState.wrongAnswer + 1,
               numberOfAnsweredquest : prevState.numberOfAnsweredquest +1,
                   
               }),()=>{
                   this.setquest(quest);
                 
                   console.log("fword")
                
               })
           }else {
            this.setState(prevState=>({
                wrongAnswer : prevState.wrongAnswer + 1,
               numberOfAnsweredquest : prevState.numberOfAnsweredquest +1,   
        }),() =>{
            this.endgame()
                })
            
           }
          
           
           }
    handlerHint=()=> {
        
       if (this.state.hint > 0){
        const Options = Array.from(document.querySelectorAll(".options"))
        let indexOfAnswer;
        Options.forEach((options,index)=>{
            if(options.innerHTML.trim() === this.state.answer.trim()){
                indexOfAnswer = index
            }
        })

        while(true){
            let rand  = Math.round(Math.random() * 3)
            if(rand !== indexOfAnswer && !this.state.IndexOfHints.includes(rand)){
                Options.forEach((options,index)=>{
                   if(index === rand){
                       options.style.visibility="hidden";
                       this.setState(prevState=>({
                        hint: prevState.hint - 1,
                        IndexOfHints:prevState.IndexOfHints.concat(rand)
                    }))
                   }
                  
                })
                break;
            }
            if(this.state.IndexOfHints.length >= 3) break;
        }}
    } 
    


    starttimer =()=>{
        let countdown = Date.now() + 180000;
        this.interval = setInterval(()=>{
        let now = new Date();
        let timer = countdown - now

        let min = Math.floor((timer % (1000*60*60))/(1000 * 60))
        let sec = Math.floor((timer % (1000*60))/(1000))

        if(timer < 0){
            clearInterval(this.interval)
            this.setState({
                time:{
                    min:0,
                    sec:0
                }
            },()=>{
                this.endgame()
            })
        }else{
            this.setState({
                time:{
                    min,
                    sec
                }
            })
        }
       
        },500)
    }

    endgame = () =>{
        let {state} = this

        let playersstat = {
            score : state.score,
            numberOfAnsweredquest : state.numberOfAnsweredquest,
            numberOfunansweredquest : state.numberOfunansweredquest,
            correctAnswer : state.correctAnswer,
            wrongAnswer : state.wrongAnswer,
            fiftyfityused : 2 - state.fiftyfity,
            hintused : 5 - state.hint,
            numberOfquest : state.numberOfquest
        }
        setTimeout(()=>{
                this.props.history.push("/play/stat", playersstat)    
        },1000)
      
    }
    render()
     { 
        let{currentquest,hint,time} = this.state
        
      
        return ( 
            
         <Fragment>
           
            <div className ="questions">
      
                 <div className="lifeline-container">
                     <p>
                         <span onClick={this.handlerHint} className=" mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
        <span className="lifeline" >{hint}</span>
                     </p>

                 </div>
                 <div className="Timers">
                     <p>
        <span className="left">{this.state.currentquestindex +1} of {this.state.numberOfquest}</span>
                         <span className="right">{time.min}:{time.sec} <span className="mdi mdi-clock-outline mdi-24px lifeline-icon" > </span></span>
                         
                     </p>
                 </div>
                 <h5>{currentquest.question}</h5>
                 <div className="question">
                 <p onClick ={this.handleOption } className= "options"> {currentquest.optionA}</p>
                     <p onClick ={this.handleOption} className= "options"> {currentquest.optionB}</p>
                 </div>
                 <div className="question">
                     <p onClick ={this.handleOption} className= "options"> {currentquest.optionC}</p>
                     <p onClick ={this.handleOption } className= "options"> {currentquest.optionD}</p>
                 </div>
                 <div className="pagebutton">
                     <button id= "prev"onClick={this.buttonhandler}>PREV</button>
                     <button id="next"onClick={this.buttonhandler}>NEXT</button>
                     <button id="quit" onClick={this.buttonhandler}>QUIT</button>
                 </div>
            
            </div>
        </Fragment>
         );
    }
}
 
export default play;