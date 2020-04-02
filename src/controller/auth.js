fifty = () =>{
    let {IndexOfrand} = this.state
    if(this.state.fiftyfity > 0 && this.state.usedfifty === false ){
         const Options = Array.from(document.querySelectorAll(".options"))
         let answerindex;

         Options.forEach((option,index) => {
          if(option.innerHTML.trim() === this.state.answer.trim()){
               answerindex = index;
             
          }
         
         })

         let count = 0;

         do{
             let randomnumber = Math.round(Math.random() * 3)
             if(randomnumber !== answerindex){
                 if(IndexOfrand.length < 2 && !IndexOfrand.includes(randomnumber) && !IndexOfrand.includes(answerindex)){
                     IndexOfrand.push(randomnumber)
                     count ++
                 } else {
                     while(true){
                         let newrandomnumber = Math.round(Math.random()*3)
                         if(newrandomnumber !== answerindex){
                              if(!IndexOfrand.includes(newrandomnumber)){
                                IndexOfrand.push(newrandomnumber)
                                console.log(IndexOfrand)
                                count ++
                                break;
                              }
                         }
                     }
                 }
             }
         }
         while(count < 2);    
         Options.forEach((Option,index)=>{
             if(IndexOfrand.includes(index)){
                 Option.style.visibility="hidden";
             }
         });
         this.setState(prevState=>({
             fiftyfity:prevState.fiftyfity -1,
             usedfifty : true,
         }))
    }
}