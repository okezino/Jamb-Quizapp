import React, { Component} from 'react';
import {Link} from "react-router-dom"
import {Form,FormGroup,Label} from "reactstrap"
import {FacebookLoginButton} from "react-social-login-buttons"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
        <Form className="login-form">
            <h1 style={{textAlign:"center"}}>
                <span className ="font-weight-bold" style={{color:"green"}}>9jabrains</span>.com
                </h1>
                <h2 style={{textAlign:"center"}} > Welcome to quiz app </h2>
                 <FormGroup>
                 <Label> Email </Label>
                 <input placeholder="@sample.com" type="email"></input>
                 </FormGroup>   

                 <FormGroup>
                 <Label> Password </Label>
                 <input placeholder="*********" type="password"></input>
                 </FormGroup> 
                 <button className= "btn-lg btn-block">Login</button> 
                 <div className="text-center pt-9">
                 login from faccebook
                 </div>
                 <FacebookLoginButton className= " mt-3 mb-3"/>
                 <div className="text-center">
                   <Link to ="#"> Create Wallet</Link><span className="p-2">|</span>
                   <Link to="#">Forget Password</Link>
                 </div>
                 <div className="text-center start">
                   <Link to ="/play/instr" className="start_try font-weight-bold"> Start Trial</Link>
                 </div>


        </Form>
        </div>
         );
    }
}
 
export default Home ;