import React, { Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router-dom"
import {Button,Form,FormGroup,Label,Input} from "reactstrap"
import {FacebookLoginButton} from "react-social-login-buttons"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Form className="login-form">
            <h1 style={{textAlign:"center"}}>
                <span className ="font-weight-bold" style={{color:"green"}}>9jabrains</span>.com
                </h1>
                <h2 style={{textAlign:"center"}} > Welcome to quiz app </h2>
                 <FormGroup>
                 <Label> Email </Label>
                 <input placeholder="Email" type="email"></input>
                 </FormGroup>   

                 <FormGroup>
                 <Label> Password </Label>
                 <input placeholder="Password" type="password"></input>
                 </FormGroup> 
                 <button className= "btn-lg btn-block">Login</button> 
                 <div className="text-center pt-9">
                 continue using your facebook account
                 </div>
                 <FacebookLoginButton className= " mt-3 mb-3"/>
                 <div className="text-center">
                   <Link to ="#"> Sign_up</Link><span className="p-2">|</span>
                   <Link to="#">Forget Password</Link>
                 </div>
                 <div className="text-center start">
                   <Link to ="/play/instr" className="start_try font-weight-bold"> Start Trial</Link>
                 </div>


        </Form>
            
         );
    }
}
 
export default Home ;